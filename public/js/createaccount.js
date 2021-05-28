const cancelBtn = document.getElementById('cancelBtn');
const createAcctBtn = document.getElementById('createaccount-btn');

// const signupFormHandler = async function (event) {
//   event.preventDefault();

//   const firstnameEl = document.querySelector('#firstname-input-signup');
//   const lastnameEl = document.querySelector('#lastname-input-signup');
//   const emailEl = document.querySelector('#email-input-signup');
//   const ageEl = document.querySelector('#age-input-signup');
//   const usernameEl = document.querySelector('#username-input-signup');
//   const passwordEl = document.querySelector('#password-input-signup');

//   const response = await fetch('/api/user', {
//     method: 'POST',
//     body: JSON.stringify({
//       firstname: firstnameEl.value,
//       lastname: lastnameEl.value,
//       email: emailEl.value,
//       age: ageEl.value,
//       username: usernameEl.value,
//       password: passwordEl.value,
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     console.log("Responses ok!")
//     document.location.replace('/addHabit');
//   } else {
//     alert('Failed to sign up');
//   }
// };

// document
//   .querySelector('#signup-form')
//   .addEventListener('submit', signupFormHandler);


cancelBtn.addEventListener('click', function () {
  event.preventDefault();
  console.log("You hit the cancel button")
  window.location.href = "/"
})

createAcctBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  console.log("You hit the create account button")
  let firstnameEl = document.querySelector('#firstname-input-signup');
  let lastnameEl = document.querySelector('#lastname-input-signup');
  let emailEl = document.querySelector('#email-input-signup');
  let ageEl = document.querySelector('#age-input-signup');
  let usernameEl = document.querySelector('#username-input-signup');
  let passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstnameEl.value,
      last_name: lastnameEl.value,
      email: emailEl.value,
      age: ageEl.value,
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log("Responses ok!")
    // document.location.replace('/addHabit');
    window.location.href = "/habits"

  } else {
    alert('Failed to sign up');
  }
});