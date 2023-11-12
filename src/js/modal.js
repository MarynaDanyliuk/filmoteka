import { refs } from './refs';
import fetchApiMovies from './apiService';

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
import { connectFirestoreEmulator } from 'firebase/firestore';

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

function closeModal(event) {
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

// let bodyLock = refs.body.classList.remove(`lock`);

function openModalAuth(event) {
  event.preventDefault();
  // refs.modalLogin.classList.add(`open`);
  // refs.body.classList.add(`lock`);

  ModalActive = event.target.getAttribute('id');

  if (ModalActive === 'library_btn') {
    refs.modalLogin.classList.toggle(`open`);
    // refs.body.classList.add(`lock`);
  } else {
    refs.modalRegister.classList.toggle(`open`);
    refs.modalLogin.classList.toggle(`open`);
  }

  // if (ModalActive === 'register_link' || 'login_link') {
  //   refs.body.classList.toggle(`lock`);
  // }
}

// __________________Draft________________

// event => {
//   event.preventDefault();
//   clearModal();
//   event.target.closest('.modal').classList.remove('open');
//   refs.body.classList.remove(`lock`);
// };

// async function onButtonWatchedClick(event) {
//   event.preventDefault();
//   closeModal(event);
//   key = 'watched';

//   moviesWatched = getItemsLocalStorage(key) || [];

//   await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
//     .then(data => {
//       console.log(data);
//       moviesWatched.push(data);
//       moviesLibrary.push(data);
//       console.log(moviesWatched);
//       return moviesWatched;
//     })
//     .then(moviesWatched => {
//       setItemsLocalStorage(key, moviesWatched);
//       // document.location.reload();
//     })
//     .catch(error => console.log(error.message));
// }

// async function onButtonQueueClick(event) {
//   event.preventDefault();
//   closeModal(event);

//   key = 'queue';

//   moviesQueue = getItemsLocalStorage(key) || [];

//   await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
//     .then(MovieActive => {
//       console.log(MovieActive);
//       moviesQueue.push(MovieActive);
//       console.log(moviesQueue);
//       return moviesQueue;
//     })
//     .then(moviesQueue => {
//       setItemsLocalStorage(key, moviesQueue);
//     })
//     .catch(error => console.log(error.message));
// }

// else {
//         alert('я молодець');
//       }

// (function createModal() {
//   refs.buttonClose.addEventListener('click', closeModal);

//   // function closeModal(event) {
//   //   event.preventDefault();
//   //   refs.modal.classList.remove(`open`);
//   //   clearModal();
//   // }
// })();

// export async function getMovieActiveId() {
//   const MovieActiveId = await ModalOpen().then(MovieActiveId => {
//     console.log(MovieActiveId);
//   });
// }

// async function libraryMovieSet(MovieActiveId, setItemsLocalStorage, getItemsLocalStorage) {
//   try {
//     const MovieActiveId = FetchApiMovies.movieId
//     const MovieActive = await FetchApiMovies.fetchMovieDetailsById(
//       MovieActiveId
//     );

//     // moviesWatched.push(MovieActive);
//     // console.log(moviesWatched);
//     // return moviesWatched;
//   }
//   // .then(moviesWatched => {
//   //   setItemsLocalStorage(moviesWatched);
//   // })
//   catch {
//     error => {
//       console.log(error.message);
//     }
//   };

//   console.log(MovieActive);
// }

// function onButtonWatchedClick(event) {
//   event.preventDefault();

//   console.log(refs.buttonWatched);

//   localStorage.setItem('watched', 'movie');
// }
// __________________________________________________________________

// let ImgActive = null;

// refs.gallery.addEventListener(`click`, onGalleryClick);

// export async function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }
//   const CurrentActiveImg = document.querySelector(`.img--active`);

//   console.log(CurrentActiveImg);

//   if (CurrentActiveImg) {
//     event.target.classList.remove(`.img--active`);
//   }

//   const nextImgActive = event.target;
//   nextImgActive.classList.add(`.img--active`);
//   console.log(event.target);

//   ImgActive = nextImgActive.getAttribute(`src`).slice(31);
//   console.log(ImgActive);

//   page = FetchApiMovies.page;

//   console.log(page);

//   const MovieId = await FetchApiMovies.fetchMoviesByPage(page).then(movies => {
//     console.log(movies);
//     const movieActive = movies.filter(movie => movie.poster_path === ImgActive);
//     console.log(movieActive);

//     const movieId = movieActive[0].id;
//     console.log(movieId);
//     return movieId;
//   });

//   await fetchMovieDetailsByIdAndRender(MovieId);
//   refs.modal.classList.add(`open`);
// }

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('backdrop--is-hidden');
//   }
// })();
