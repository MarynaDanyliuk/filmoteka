import { refs } from './refs';
// import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';
import { clearModal } from './renderServies';

import { onGalleryClick } from './searchByQuery';

let MovieId = 926393;

MovieId = onGalleryClick;

// refs.gallery.addEventListener(`click`, getMovieId);

// import { getMovieId } from './searchByQuery';

// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

// refs.buttonWatched.addEventListener('click', onButtonWatchedClick);

// function onButtonWatchedClick(event) {
//   event.preventDefault();
// }

// getMovieId().then(MovieId => {
//   console.log(MovieId);
// });

const createModal = (MovieId, onSuccess, onError) => {
  // const promise = new Promise((resolve, reject) => {
  if (MovieId) {
    onSuccess();
  } else {
    onError();
  }
  // }
  // );

  // return promise;
};

function onSuccess() {
  console.log('получилось');
}

function onError() {
  console.log('Error');
}

createModal(onGalleryClick, onSuccess, onError);

// (function getMovieId(MovieId) {
//   const promise = new Promise((resolve, reject) => {
//     if (MovieId) {
//       resolve(console.log('получилось'));
//     } else {
//       reject(console.log('Error'));
//     }
//   });

//   return promise;
// })();

// console.log(promise);

// const p = getMovieId();

// getMovieId().then(console.log('create Modal')).catch(console.log('error'));

//   (
//   function createModal() {
//     function closeModal(event) {
//       event.preventDefault();
//       refs.modal.classList.remove(`open`);
//       clearModal();
//     }

//     refs.buttonClose.addEventListener('click', closeModal);
//   }
// )();

function onButtonWatchedClick(event) {
  event.preventDefault();

  console.log(refs.buttonWatched);

  localStorage.setItem('watched', 'movie');
}
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
