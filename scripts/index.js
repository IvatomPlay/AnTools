const modal = document.getElementById('modal'); 
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('signUpBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

openBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

document.getElementById('signUpForm').addEventListener('click', function(e) {
  e.preventDefault();
  
  const userData = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }; 
  
  fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(result => alert(result.message))
  .catch(err => console.error('error:', err));
});
