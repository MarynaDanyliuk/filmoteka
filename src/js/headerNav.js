import { refs } from './refs';

refs.headerNavLinks.forEach(headerNavLink =>
  headerNavLink.addEventListener('click', onHeaderNavClick)
);

export function onHeaderNavClick(event) {
  // const currentActiveLink = document.querySelector('.nav_item--current');
  // const nextLinkActive = event.target;

  if (event.target === nextLinkActive) {
    // currentActiveLink.classList.remove(`nav_item--current`);
    // nextLinkActive.classList.add('nav_item--current');
    // refs.form.classList.add('not-visible');
    // refs.headerNavButtons.classList.remove('not-visible');
  }
}
