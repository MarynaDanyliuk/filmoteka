// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

import { refs } from './refs';

import {
  clearPage,
  renderPageNotFound,
  homeHeader,
  libraryHeader,
} from './renderServies';

import { fetchMoviesAndRender } from './fetchAndRender';

import { showButtonLoad, hideButtonLoad } from './pagination';

export async function homePage() {
  clearPage();
  homeHeader();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage() {
  clearPage();

  libraryHeader();

  refs.gallery.textContent = 'Це сторінка "Бібліотека"';
  await fetchMoviesAndRender();
  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}

// refs.input.value = '';
// refs.homeBtn.classList.add('nav_item--current');
// refs.libraryBtn.classList.remove('nav_item--current');
// refs.headerNavButtons.classList.add('not-visible');
// refs.form.classList.remove('not-visible');

// refs.homeBtn.classList.remove('nav_item--current');
// refs.libraryBtn.classList.add('nav_item--current');
// refs.headerNavButtons.classList.remove('not-visible');
// refs.form.classList.add('not-visible');
