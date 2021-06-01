const cancelBtn = document.getElementById('cancel-btn');
const loginBtn = document.getElementById('login-btn');



cancelBtn.addEventListener('click', function () {
  event.preventDefault();
  window.location.href = "/"
});

loginBtn.addEventListener('click', async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    res.ok ? document.location.replace('/habits') : alert(res.statusText);
  }
});