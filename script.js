const menuHamburgerIcon = document.querySelector('.hamburger-icon');
const menuCloseIcon = document.querySelector('.menu-overlay__close');
const menuOverlay = document.querySelector('.menu-overlay');

menuHamburgerIcon.addEventListener('click', () => {
  menuOverlay.classList.add('menu-overlay--active');
});

menuCloseIcon.addEventListener('click', () => {
  menuOverlay.classList.remove('menu-overlay--active');
});