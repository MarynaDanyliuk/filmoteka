import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
  // renderRegisterPage,
} from './renderServies';

import { renderLibraryCollection } from './libraryCollection';
import { fetchMoviesAndRender, fetchGenresListByIds } from './fetchAndRender';
import { showButtonLoad, hideButtonLoad } from './pagination';
// import { openModalRegister } from './modal_auth';

let key = 'library';

export async function homePage() {
  clearPage();
  renderHomeHeader();
  await fetchGenresListByIds();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage() {
  clearPage();

  renderLibraryHeader();

  renderLibraryCollection(key);

  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}

export function registerPage() {
  // openModalRegister;
}

// refs.buttonWatched.addEventListener('click', onButtonsHeaderNavClick);
// refs.buttonQueue.addEventListener('click', onButtonsHeaderNavClick);

// import { refs } from './refs';

// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

// import { onButtonsHeaderNavClick } from './modal';

// import { getItemsLocalStorage } from './localStorageService';

// console.log(getItemsLocalStorage(key));

// refs.gallery.textContent = 'Це сторінка "Бібліотека"';

// refs.input.value = '';
// refs.homeBtn.classList.add('nav_item--current');
// refs.libraryBtn.classList.remove('nav_item--current');
// refs.headerNavButtons.classList.add('not-visible');
// refs.form.classList.remove('not-visible');

// refs.homeBtn.classList.remove('nav_item--current');
// refs.libraryBtn.classList.add('nav_item--current');
// refs.headerNavButtons.classList.remove('not-visible');
// refs.form.classList.add('not-visible');
