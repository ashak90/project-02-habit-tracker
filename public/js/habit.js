const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");
const habitTable = document.getElementById("habitTable");

const handleTableClick = async (event) => {
  const habitEl = event.target.parentElement;
  const habitId = habitEl.dataset.id;
  const freq = habitEl.childNodes[5];
  const res = await fetch(`/api/habits/increment/${habitId}`, {
    method: 'PUT'
  });
  if (res.ok) {
    const habit = await res.json();
    console.log(habit);
    freq.innerHTML = habit.frequency;
    if (freq.innerHTML == habit.target_freq && habit.good_habit) document.location.replace('/congrats');
  } else {
    alert(res.statusText);
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