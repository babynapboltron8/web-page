// Hambuger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Tooggle Dark-mode

const inputEl = document.querySelector('.input');

const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = 'black';
  } else {
    bodyEl.style.background = 'white';
  }
}

inputEl.addEventListener('input', () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}
