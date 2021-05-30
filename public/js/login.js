const cancelBtn = document.getElementById('cancel-btn');
const loginBtn = document.getElementById('login-btn');



cancelBtn.addEventListener('click', function () {
  // event.preventDefault();
  window.location.href = "/"
});

loginBtn.addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      res.ok ? document.location.replace('/habits') : alert(res.statusText);
    });
  }
});