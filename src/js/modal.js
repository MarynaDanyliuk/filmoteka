import { refs } from './refs';
import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

// let moviesWatched = [];
// let moviesQueue = [];
export let MovieActiveId = null;
// let key = '';
// let moviesLibrary = [];
let ModalActive = '';

refs.gallery.addEventListener(`click`, openModal);
// refs.butttonsLibrary.addEventListener('click', createLibraryCollection);
// refs.buttonHeaderNav.addEventListener('click', onButtonsHeaderNavClick);

refs.libraryBtn.addEventListener(`click`, openModalAuth);
refs.registerLink.addEventListener('click', openModalAuth);
refs.loginLink.addEventListener('click', openModalAuth);

import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';

// import { renderLibraryCollection } from './libraryCollection';

import { auth } from '../firebase/fb_config';

// import {
//   setItemsLocalStorage,
//   getItemsLocalStorage,
// } from './localStorageService';
// import { clearPage } from './renderServies';

export async function openModal(event) {
  event.preventDefault();
  const user = auth.currentUser;
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  if (!user) {
    refs.modalLogin.classList.add(`open`);
  } else if (user) {
    MovieActiveId = event.target.getAttribute(`id`);
    FetchApiMovies.movieId = MovieActiveId;
    console.log(MovieActiveId);
    await fetchMovieDetailsByIdAndRender(MovieActiveId);
    refs.modal.classList.add(`open`);
    refs.body.classList.add(`lock`);
    return MovieActiveId;
  }
  return MovieActiveId;
}

// export async function createLibraryCollection(event) {
//   event.preventDefault();
//   key = event.target.getAttribute('id');
//   console.log('key:', key);
//   if (event.target.nodeName !== `BUTTON`) {
//     return;
//   }
//   refs.buttonQueue.classList.add('active_btn');
//   refs.buttonWatched.classList.remove('active_btn');

//   moviesWatched = getItemsLocalStorage(key) || [];
//   moviesQueue = getItemsLocalStorage(key) || [];

//   closeModal(event);

//   await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
//     .then(data => {
//       // moviesLibrary = getItemsLocalStorage('library') || [];
//       // console.log(data);
//       // moviesLibrary.push(data);

//       // setItemsLocalStorage('library', moviesLibrary);
//       if (key === 'watched') {
//         moviesWatched.push(data);
//         setItemsLocalStorage(key, moviesWatched);
//       } else if (key === 'queue') {
//         moviesQueue.push(data);
//         setItemsLocalStorage(key, moviesQueue);
//         // refs.buttonWatched.classList.remove('active_btn');
//         // refs.buttonQueue.classList.add('active_btn');
//       }
//     })
//     .catch(error => console.log(error.message))
//     .finally(() => {
//       alert('фільм додано в бібліотеку');
//     });
// }

// export function onButtonsHeaderNavClick(event) {
//   clearPage();

//   key = event.target.getAttribute('id');

//   moviesWatched = getItemsLocalStorage(key) || [];
//   moviesQueue = getItemsLocalStorage(key) || [];

//   if (key === 'watched') {
//     renderLibraryCollection(key);
//   }
//   if (key === 'queue') {
//     renderLibraryCollection(key);
//   }
// }

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

  ModalActive = event.target.getAttribute('id');
  const user = auth.currentUser;
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

// else {
// MovieActiveId = event.target.getAttribute(`id`);
// FetchApiMovies.movieId = MovieActiveId;
// console.log(FetchApiMovies.movieId);
// await fetchMovieDetailsByIdAndRender(MovieActiveId);
// refs.modal.classList.add(`open`);
// refs.body.classList.add(`lock`);
// return MovieActiveId;
// }
// refs.modalLogin.classList.remove(`open`);

// return;

// async function createLibraryCollection(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== `BUTTON`) {
//     return;
//   }
//   key = event.target.getAttribute('id');

//   moviesWatched = getItemsLocalStorage(key) || [];
//   moviesQueue = getItemsLocalStorage(key) || [];

//   closeModal(event);

//   await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
//     .then(data => {
//       moviesLibrary = getItemsLocalStorage('library') || [];
//       console.log(data);
//       moviesLibrary.push(data);

//       setItemsLocalStorage('library', moviesLibrary);
//       if (key === 'watched') {
//         moviesWatched.push(data);
//         setItemsLocalStorage(key, moviesWatched);
//       } else if (key === 'queue') {
//         moviesQueue.push(data);
//         setItemsLocalStorage(key, moviesQueue);
//       }
//     })
//     .catch(error => console.log(error.message))
//     .finally(() => {
//       alert('фільм додано в бібліотеку');
//     });
// }

// function saveUserDataToLocalStorage(username, userData) {
//   const key = `userData_${username}`;
//   localStorage.setItem(key, JSON.stringify(userData));
// }

// function createKey(uid) {
//     const KEY_LC = `${uid}_${key}`;

//     console.log(KEY_LC);

// }
