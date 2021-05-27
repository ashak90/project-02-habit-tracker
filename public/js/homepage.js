const signInBtn = document.getElementById('signIn')
const createAcctBtn = document.getElementById('createAcc')

signInBtn.addEventListener("click", function () {
    window.location.href = "/login"
});

createAcctBtn.addEventListener("click", function () {
    window.location.href = "/signup"
});