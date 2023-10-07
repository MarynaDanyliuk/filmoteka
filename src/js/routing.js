import { homePage, libraryPage, notFoundPage } from './content-pages';
import { onHeaderNavClick } from './headerNav';
import { refs } from './refs';

window.addEventListener('hashchange', renderContent);
refs.logo.addEventListener('click', homePage);
refs.headerNavLinks.forEach(headerNavLink =>
  headerNavLink.addEventListener('click', onHeaderNavClick)
);

renderContent();

function renderContent() {
  const route = window.location.hash.substring(1);

  console.log(route);
  if (route === '/' || route === '') {
    homePage();
  } else if (route === '/library') {
    libraryPage();
  } else {
    notFoundPage();
  }
}

// _______________________________________________________________

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
