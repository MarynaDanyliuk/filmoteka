import { refs } from './refs';
import fetchApiMovies from './apiService';
import { auth } from '../firebase/fb_config';

const FetchApiMovies = new fetchApiMovies();

let moviesWatched = [];
let moviesQueue = [];
let MovieActiveId = null;
let key = '';
let moviesLibrary = [];
let ModalActive = '';

refs.gallery.addEventListener(`click`, openModal);
refs.butttonsLibrary.addEventListener('click', createLibraryCollection);
refs.buttonHeaderNav.addEventListener('click', onButtonsHeaderNavClick);

refs.libraryBtn.addEventListener(`click`, openModalAuth);
refs.registerLink.addEventListener('click', openModalAuth);
refs.loginLink.addEventListener('click', openModalAuth);

import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';

import { renderLibraryCollection } from './libraryCollection';

import {
  setItemsLocalStorage,
  getItemsLocalStorage,
} from './localStorageService';
import { clearPage } from './renderServies';

async function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }

  MovieActiveId = event.target.getAttribute(`id`);
  FetchApiMovies.movieId = MovieActiveId;
  console.log(FetchApiMovies.movieId);
  await fetchMovieDetailsByIdAndRender(MovieActiveId);
  refs.modal.classList.add(`open`);
  refs.body.classList.add(`lock`);
  return MovieActiveId;
}

async function createLibraryCollection(event) {
  event.preventDefault();
  if (event.target.nodeName !== `BUTTON`) {
    return;
  }
  key = event.target.getAttribute('id');

  moviesWatched = getItemsLocalStorage(key) || [];
  moviesQueue = getItemsLocalStorage(key) || [];

  closeModal(event);

  await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
    .then(data => {
      moviesLibrary = getItemsLocalStorage('library') || [];
      console.log(data);
      moviesLibrary.push(data);
      setItemsLocalStorage('library', moviesLibrary);
      if (key === 'watched') {
        moviesWatched.push(data);
        setItemsLocalStorage(key, moviesWatched);
      } else if (key === 'queue') {
        moviesQueue.push(data);
        setItemsLocalStorage(key, moviesQueue);
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      alert('фільм додано в бібліотеку');
      // document.location.reload();
    });
}

export function onButtonsHeaderNavClick(event) {
  clearPage();

  key = event.target.getAttribute('id');

  moviesWatched = getItemsLocalStorage(key) || [];
  moviesQueue = getItemsLocalStorage(key) || [];

  if (key === 'watched') {
    renderLibraryCollection(key);
  }
  if (key === 'queue') {
    renderLibraryCollection(key);
  }
}

const modalCloseButtons = refs.buttonClose;
if (modalCloseButtons) {
  for (let i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', closeModal);
  }
}

const modalBackdrops = refs.modalBackdrop;
if (modalBackdrops) {
  for (let i = 0; i < modalBackdrops.length; i++) {
    modalBackdrops[i].addEventListener('click', closeModal);
  }
}

export function closeModal(event) {
  refs.modal.classList.remove(`open`);
  if (event.target.nodeName === `A`) {
    event.target.closest('.modal').classList.remove('open');
  }

  refs.body.classList.remove(`lock`);
  clearModal();
  event.preventDefault();
}

function clearModal() {
  refs.movieImage.innerHTML = '';
  refs.movieDescr.innerHTML = '';
}

// _________________Modal Auth___________________

function openModalAuth(event) {
  event.preventDefault();
  const user = auth.currentUser;
  ModalActive = event.target.getAttribute('id');

  if (ModalActive === 'library_btn' && user) {
    window.location.assign('#/library');
    refs.modalRegister.classList.remove(`open`);
    return;
  }
  if (ModalActive === 'library_btn' && !user) {
    refs.modalLogin.classList.add(`open`);
  } else {
    refs.modalRegister.classList.toggle(`open`);
    refs.modalLogin.classList.toggle(`open`);
  }
}
