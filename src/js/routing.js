import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { refs } from './refs';

import { clearPage } from './renderServies';

import { fetchMoviesByPageAndRender } from './fetchAndRender';
import { smoothScrolling } from './searchByQuery';
import { onGalleryClick } from './modal';
import { showButtonLoad } from './pagination';

let page = 1;

page = FetchApiMovies.page;

// window.addEventListener('scroll', smoothScrolling);
window.addEventListener('hashchange', renderContent);

renderContent();

async function renderContent() {
  const route = window.location.hash.substring(1);

  console.log(route);

  if (route === '/' || route === '') {
    clearPage();
    refs.headerNavButtons.classList.add('not-visible');
    refs.form.classList.remove('not-visible');
    await fetchMoviesByPageAndRender(page);
    showButtonLoad();

    console.log('BEFORE scroll', FetchApiMovies);
  } else if (route === '/library') {
    clearPage();
    refs.gallery.textContent = 'Це сторінка "Бібліотека"';
    await fetchMoviesByPageAndRender(page);
  } else {
    clearPage();
    window.removeEventListener('scroll', smoothScrolling);
    refs.content.textContent = 'Сторінка не знайдена';
  }
}
