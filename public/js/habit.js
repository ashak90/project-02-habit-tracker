const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");

addNewBtn.addEventListener("click", function () {
  window.location.href = "/addHabit";
});

logOutBtn.addEventListener("click", async function () {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
});

// Current Date
let date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();
