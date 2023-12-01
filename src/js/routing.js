import {
  homePage,
  libraryPage,
  registerPage,
  notFoundPage,
} from './content-pages';
import { refs } from './refs';
import { auth } from '../firebase/fb_config';

window.addEventListener('hashchange', renderContent);
refs.logo.addEventListener('click', homePage);
// refs.libraryBtn.addEventListener('click', libraryPage);

renderContent();

function renderContent() {
  const route = window.location.hash.substring(1);
  const user = auth.currentUser;

  console.log(route);
  if (route === '/' || route === '') {
    homePage(user);
  } else if (route === '/library') {
    libraryPage();
  } else {
    notFoundPage();
  }
}

// _______________________________________________________________

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
