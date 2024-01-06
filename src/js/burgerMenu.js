import { refs } from './refs';
import { auth } from '../firebase/fb_config';

refs.openBurgerBtn.addEventListener(`click`, toggleBurgerMenu);
refs.closeBurgerBtn.addEventListener(`click`, toggleBurgerMenu);

function toggleBurgerMenu(event) {
  event.preventDefault();
  const user = auth.currentUser;
  if (!user) {
    refs.modalLogin.classList.add(`open`);
  } else if (user) {
    refs.mobileMenu.classList.toggle(`open`);
  }
}
