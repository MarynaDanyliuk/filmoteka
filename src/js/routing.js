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

// import { auth } from '../firebase/fb_config';
// import { user } from '../firebase/db';

// window.addEventListener('hashchange', renderContent);

// let key = 'watched';

// refs.libraryBtn.addEventListener('click', libraryPage);

// renderContent(key, user);_________________________________

// import { onHeaderNavClick } from './headerNav';
// refs.headerNavLinks.forEach(headerNavLink =>
//   headerNavLink.addEventListener('click', onHeaderNavClick)
// );

// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

// import { refs } from './refs';

// import { clearPage, PageNotFound } from './renderServies';

// import { fetchMoviesByPageAndRender } from './fetchAndRender';
// import { smoothScrolling } from './searchByQuery';
// import { showButtonLoad, hideButtonLoad } from './pagination';

// let page = 1;

// clearPage();
// refs.headerNavButtons.classList.add('not-visible');
// refs.form.classList.remove('not-visible');
// await fetchMoviesByPageAndRender(page);
// showButtonLoad();
// console.log('BEFORE scroll', FetchApiMovies);

// clearPage();
// // refs.gallery.textContent = 'Це сторінка "Бібліотека"';
// await fetchMoviesByPageAndRender(page);
// showButtonLoad();

// clearPage();
// window.removeEventListener('scroll', smoothScrolling);
// // refs.content.textContent = 'Сторінка не знайдена';
// PageNotFound();
// hideButtonLoad();
