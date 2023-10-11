import { refs } from './refs';
import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

let moviesWatched = [];
let moviesQueue = [];
let moviesLibrary = [];
let MovieActive = null;
// MovieActiveId = FetchApiMovies.movieId;

refs.buttonClose.addEventListener('click', closeModal);
refs.buttonWatched.addEventListener('click', onButtonWatchedClick);
refs.buttonQueue.addEventListener('click', onButtonQueueClick);

import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';
// import { clearModal } from './renderServies';
import {
  setItemsLocalStorage,
  getItemsLocalStorage,
} from './localStorageService';

let MovieActiveId = null;
let key = 'watched';

refs.gallery.addEventListener(`click`, ModalOpen);

export async function ModalOpen(event) {
  event.preventDefault();

  moviesWatched = getItemsLocalStorage(key);

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  MovieActiveId = event.target.getAttribute(`id`);
  FetchApiMovies.movieId = MovieActiveId;
  console.log(FetchApiMovies.movieId);
  await fetchMovieDetailsByIdAndRender(MovieActiveId);
  refs.modal.classList.add(`open`);
  return MovieActiveId;
}

export function closeModal(event) {
  event.preventDefault();
  refs.modal.classList.remove(`open`);
  clearModal();
}

function clearModal() {
  refs.movieCard.innerHTML = '';
  refs.movieDescr.innerHTML = '';
}

// (function createModal() {
//   refs.buttonClose.addEventListener('click', closeModal);

//   // function closeModal(event) {
//   //   event.preventDefault();
//   //   refs.modal.classList.remove(`open`);
//   //   clearModal();
//   // }
// })();

async function onButtonWatchedClick(event) {
  event.preventDefault();
  closeModal(event);

  MovieActive = await FetchApiMovies.fetchMovieDetailsById(
    FetchApiMovies.movieId
  )
    .then(data => {
      console.log(data);
      moviesWatched.push(data);
      console.log(moviesWatched);
      return moviesWatched;
    })
    .then(moviesWatched => {
      setItemsLocalStorage('watched', moviesWatched);
    })
    .catch(error => console.log(error.message));
}

async function onButtonQueueClick(event) {
  event.preventDefault();

  const MovieActive = await FetchApiMovies.fetchMovieDetailsById(
    FetchApiMovies.movieId
  )
    .then(MovieActive => {
      console.log(MovieActive);
      moviesQueue.push(MovieActive);
      console.log(moviesQueue);
      return moviesQueue;
    })
    .then(moviesQueue => {
      setItemsLocalStorage('queue', moviesQueue);
    })
    .catch(error => console.log(error.message));
}

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
