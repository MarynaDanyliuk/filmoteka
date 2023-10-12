// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

import { refs } from './refs';

import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
  renderGallary,
} from './renderServies';

import { renderLibraryCollection } from './libraryCollection';

import { fetchMoviesAndRender } from './fetchAndRender';

import { showButtonLoad, hideButtonLoad } from './pagination';

import { onButtonsHeaderNavClick } from './modal';

// import { getItemsLocalStorage } from './localStorageService';

let key = 'library';

// refs.buttonWatched.addEventListener('click', onButtonsHeaderNavClick);
// refs.buttonQueue.addEventListener('click', onButtonsHeaderNavClick);

export async function homePage() {
  clearPage();
  renderHomeHeader();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage() {
  clearPage();

  renderLibraryHeader();

  // console.log(getItemsLocalStorage(key));

  // refs.gallery.textContent = 'Це сторінка "Бібліотека"';

  renderLibraryCollection(key);

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
