const addNewBtn = document.getElementById("addNewBtn")


addNewBtn.addEventListener("click", function () {
    window.location.href = "/addHabit"
});

// Current Date
let date = new Date();
document.getElementById('todayDate').innerHTML = date.toDateString();
