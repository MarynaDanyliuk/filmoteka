import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { refs } from './refs';

import { clearPage, PageNotFound } from './renderServies';

import { fetchMoviesByPageAndRender } from './fetchAndRender';
import { smoothScrolling } from './searchByQuery';
import { showButtonLoad, hideButtonLoad } from './pagination';

let page = 1;

export async function homePage() {
  clearPage();
  refs.headerNavButtons.classList.add('not-visible');
  refs.form.classList.remove('not-visible');
  await fetchMoviesByPageAndRender(page);
  showButtonLoad();

  console.log('BEFORE scroll', FetchApiMovies);
}

export async function libraryPage() {
  clearPage();
  // refs.gallery.textContent = 'Це сторінка "Бібліотека"';
  await fetchMoviesByPageAndRender(page);
  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  window.removeEventListener('scroll', smoothScrolling);
  // refs.content.textContent = 'Сторінка не знайдена';
  PageNotFound();
  hideButtonLoad();
}
