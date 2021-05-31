const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");
const habitTable = document.getElementById("habitTable");

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

habitTable.addEventListener("click", async function () {
  const habitId = event.target.parentElement.dataset.id;
  const freq = event.target.parentElement.childNodes[5];
  const res = await fetch(`/api/habits/increment/${habitId}`, {
    method: 'PUT'
  });
  const habit = await res.json();
  console.log(habit);
  freq.innerHTML = habit.frequency;
});

// Current Date
let date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();
