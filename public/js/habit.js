const addNewBtn = document.getElementById("addNewBtn");
const logOutBtn = document.getElementById("logOutBtn");

addNewBtn.addEventListener("click", function () {
  window.location.href = "/addHabit";
});

logOutBtn.addEventListener("click", function () {
  window.location.href = "/";
});

// Current Date
let date = new Date();
document.getElementById("todayDate").innerHTML = date.toDateString();
