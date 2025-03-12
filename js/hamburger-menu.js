document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});