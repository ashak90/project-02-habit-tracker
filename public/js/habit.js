const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");

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

// Current Date
let date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();
