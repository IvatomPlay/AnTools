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