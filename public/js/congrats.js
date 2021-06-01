const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', function () {
    event.preventDefault();
    window.location.href = "/habits"
  });