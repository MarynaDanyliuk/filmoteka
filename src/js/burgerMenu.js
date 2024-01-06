import { refs } from './refs';
import { auth } from '../firebase/fb_config';

refs.openBurgerBtn.addEventListener(`click`, toggleBurgerMenu);
refs.closeBurgerBtn.addEventListener(`click`, toggleBurgerMenu);

function toggleBurgerMenu(event) {
  console.log('hello');
  event.preventDefault();
  const user = auth.currentUser;
  if (!user) {
    refs.modalLogin.classList.add(`open`);
  } else if (user) {
    refs.mobileMenu.classList.toggle(`open`);
    // refs.body.classList.add(`lock`);
  }
}

// function closeBurgerMenu(event) {
//   event.preventDefault();
//   refs.mobileMenu.classList.toggle(`open`);
// }

// const toggleMenu = () => {
//   const isMenuOpen =
//     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//   openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//   mobileMenu.classList.toggle('is-open');

//   const scrollLockMethod = !isMenuOpen
//     ? 'disableBodyScroll'
//     : 'enableBodyScroll';
//   bodyScrollLock[scrollLockMethod](document.body);
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);
