const cancelBtn = document.getElementById('cancelBtn');
const createAcctBtn = document.getElementById('createaccount-btn');


cancelBtn.addEventListener('click', function () {
  event.preventDefault();
  console.log("You hit the cancel button")
  window.location.href = "/"
})

createAcctBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  console.log("You hit the create account button")
  let firstnameEl = document.querySelector('#firstname-input-signup').value;
  let lastnameEl = document.querySelector('#lastname-input-signup').value;
  let emailEl = document.querySelector('#email-input-signup').value;
  let ageEl = document.querySelector('#age-input-signup').value;
  let usernameEl = document.querySelector('#username-input-signup').value;
  let passwordEl = document.querySelector('#password-input-signup').value;

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstnameEl,
      last_name: lastnameEl,
      email: emailEl,
      age: ageEl,
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log("Responses ok!")
    document.location.replace('/habits');
  } else {
    alert(response.statusText);
  }
});