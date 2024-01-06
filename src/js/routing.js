import { homePage, libraryPage, notFoundPage } from './content-pages';
import { refs } from './refs';

refs.logo.addEventListener('click', homePage);

export async function renderContent(key, user) {
  const route = window.location.hash.substring(1);
  console.log(route);
  if (route === '/' || route === '') {
    await homePage(user);
  } else if (route === '/library') {
    console.log(key, user);
    await libraryPage(key, user);
    // refs.mobileMenu.classList.toggle(`open`);
  } else {
    console.log('rere');
    notFoundPage();
  }
}

function redirectPage(event) {
  event.preventDefault();
  console.log('helllllo');
  libraryPage(user);
  refs.mobileMenu.classList.toggle(`open`);
}

