const signupFormHandler = async function (event) {
  event.preventDefault();

  const firstnameEl = document.querySelector('#firstname-input-signup');
  const lastnameEl = document.querySelector('#lastname-input-signup');
  const emailEl = document.querySelector('#email-input-signup');
  const ageEl = document.querySelector('#age-input-signup');
  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      firstname: firstnameEl.value,
      lastname: lastnameEl.value,
      email: emailEl.value,
      age: ageEl.value,
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log("Responses ok!")
    document.location.replace('/addHabit');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);