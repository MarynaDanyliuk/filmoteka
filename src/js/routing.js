import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { refs } from './refs';

import { clearPage } from './renderServies';

import {
  fetchMoviesByPageAndRender,
  fetchMoviesByQueryAndRender,
} from './fetchAndRender';
import { smoothScrolling } from './searchByQuery';

// let page = 1;
let query = '';

// window.addEventListener('scroll', smoothScrolling);
window.addEventListener('hashchange', renderContent);

renderContent();

async function renderContent() {
  const route = window.location.hash.substring(1);

  console.log(route);

  if (route === '/' || route === '') {
    clearPage();

    await fetchMoviesByPageAndRender(page);
    console.log('BEFORE scroll', FetchApiMovies);

    // if (query === '') {
    //   await fetchMoviesByPageAndRender(page);
    //   console.log('BEFORE scroll', FetchApiMovies);
    //   return;
    // }

    // await fetchMoviesByQueryAndRender(query, page);
    // console.log('BEFORE scroll', FetchApiMovies);
  } else if (route === '/library') {
    clearPage();
    // renderHeaderLibrary();
    refs.gallery.textContent = 'Це сторінка "Бібліотека"';
    // await fetchMoviesByPageAndRender(page);
  } else {
    clearPage();
    window.removeEventListener('scroll', smoothScrolling);
    refs.content.textContent = 'Сторінка не знайдена';
  }
}
