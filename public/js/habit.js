const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");
const habitTable = document.getElementById("habitTable");

const handleTableClick = async (event) => {
  const habitEl = event.target.parentElement;
  const habitId = habitEl.dataset.id;
  const btnType = habitEl.dataset.type;
  if (btnType == "delete") {
    handleDelete(habitEl);
    return;
  }
  if (btnType == "reset") {
    handleReset(habitEl);
    return;
  }
  const freq = habitEl.childNodes[5];
  const res = await fetch(`/api/habits/increment/${habitId}`, {
    method: 'PUT'
  });
  if (res.ok) {
    const habit = await res.json();
    console.log(habit);
    freq.innerHTML = habit.frequency;
    if (freq.innerHTML == habit.target_freq && habit.good_habit) document.location.replace('/congrats');
    if (freq.innerHTML > habit.target_freq && !habit.good_habit) console.log("better luck next time");
  } else {
    alert(res.statusText);
  }
}

const handleReset = async (habitEl) => {
  const habitId = habitEl.parentElement.dataset.id;
  const res = await fetch(`/api/habits/${habitId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      frequency: 0
    })
  });
  if (res.ok) {
    document.location.reload();
  }
}

const handleDelete = async (habitEl) => {
  const habitId = habitEl.parentElement.dataset.id;
  const res = await fetch(`/api/habits/${habitId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    document.location.reload();
  }
}

// Current Date
let date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();

addNewBtn.addEventListener("click", function () {
  window.location.href = "/addHabit";
});

logOutBtn.addEventListener("click", async function () {
  const res = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  res.ok ? document.location.replace('/habits') : alert(res.statusText);
});

habitTable.addEventListener("click", handleTableClick);