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
  const first_name = document.querySelector('#firstname-input-signup').value;
  const last_name = document.querySelector('#lastname-input-signup').value;
  const email = document.querySelector('#email-input-signup').value;
  const age = document.querySelector('#age-input-signup').value;
  const username = document.querySelector('#username-input-signup').value;
  const password = document.querySelector('#password-input-signup').value;

  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      age,
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  res.ok ? document.location.replace('/habits') : alert(res.statusText);
});