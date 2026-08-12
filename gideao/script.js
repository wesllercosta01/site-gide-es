javascript

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});