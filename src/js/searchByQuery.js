import { refs } from './refs';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { clearPage } from './renderServies';
import {
  fetchMoviesByQueryAndRender,
  fetchMoviesByPageAndRender,
} from './fetchAndRender';

let query = '';
let page = 1;

refs.form.addEventListener(`submit`, onFormSubmit);
refs.buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);

export async function onFormSubmit(event) {
  event.preventDefault();

  clearPage();
  FetchApiMovies.resetPage();

  FetchApiMovies.query = event.currentTarget.elements.searchQuery.value.trim();

  if (FetchApiMovies.query === ``) {
    return;
  }

  page = FetchApiMovies.page;
  query = FetchApiMovies.query;

  await fetchMoviesByQueryAndRender(query, page);
  console.log('BEFORE scroll', FetchApiMovies);
}

export async function onButtonLoadMoreClick(event) {
  event.preventDefault();
  console.log('BEFORE FETCH', FetchApiMovies);
  FetchApiMovies.incrementPage();
  page = FetchApiMovies.page;

  if (query === '') {
    await fetchMoviesByPageAndRender(page);
  }

  query = FetchApiMovies.query;

  await fetchMoviesByQueryAndRender(query, page);

  console.log('AFTER FETCH', FetchApiMovies);
}

// ________________________________________________________________

// window.addEventListener('scroll', smoothScrolling);
// refs.gallery.addEventListener(`click`, getMovieId);
// refs.gallery.addEventListener(`click`, onGalleryClick);
// refs.buttonWatched.addEventListener('click', onButtonWatchedClick);
// refs.gallery.addEventListener(`click`, ModalOpen);

// export async function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }
//   const CurrentActiveImg = document.querySelector(`.img--active`);

//   if (CurrentActiveImg) {
//     event.target.classList.remove(`.img--active`);
//   }

//   const nextImgActive = event.target;
//   nextImgActive.classList.add(`.img--active`);

//   ImgActive = nextImgActive.getAttribute(`src`).slice(31);

//   page = FetchApiMovies.page;
//   query = FetchApiMovies.query;

//   if (query === '') {
//     MovieId = await FetchApiMovies.fetchMoviesByPage(page).then(movies => {
//       const movieActive = movies.filter(
//         movie => movie.poster_path === ImgActive
//       );
//       const movieId = movieActive[0].id;
//       return movieId;
//     });

//     FetchApiMovies.movieId = MovieId;
//     console.log(FetchApiMovies.movieId);
//     await fetchMovieDetailsByIdAndRender(MovieId);
//     refs.modal.classList.add(`open`);

//     // ___________________local storage_______________

//     // const MovieActive = await FetchApiMovies.fetchMoviesByPage(page).then(
//     //   movies => {
//     //     // console.log(movies);
//     //     const movieActive = movies.filter(
//     //       movie => movie.poster_path === ImgActive
//     //     );
//     //     // console.log(movieActive);

//     //     const ActiveMovie = movieActive[0];
//     //     // console.log(movieId);
//     //     return ActiveMovie;
//     //   }
//     // );
//     // console.log(MovieActive);

//     // moviesWatched.push(MovieActive);

//     // const MovieActiveStr = JSON.stringify(MovieActive);

//     return MovieId;
//     // return;
//   }

//   MovieId = await FetchApiMovies.fetchMoviesByQuery(query, page).then(
//     movies => {
//       console.log(movies);
//       const movieActive = movies.filter(
//         movie => movie.poster_path === ImgActive
//       );
//       // console.log(movieActive);

//       const movieId = movieActive[0].id;
//       // console.log(movieId);
//       return movieId;
//     }
//   );

//   await fetchMovieDetailsByIdAndRender(MovieId);
//   refs.modal.classList.add(`open`);
//   // return;
//   return MovieId;
// }

// async function ModalOpen(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }

//   MovieActiveId = event.target.getAttribute(`id`);
//   // console.log(MovieActiveId);
//   await fetchMovieDetailsByIdAndRender(MovieActiveId);
//   refs.modal.classList.add(`open`);
//   return MovieActiveId;
// }

// async function onButtonWatchedClick(event) {
//   event.preventDefault();
//   getMovieActive()
//     .then(MovieActive => {
//       moviesWatched.push(MovieActive);
//       console.log(moviesWatched);
//       return moviesWatched;
//     })
//     .then(moviesWatched => {
//       setItemsLocalStorage(moviesWatched);
//     })
//     .catch(error => console.log(error.message));
// }

// console.log(moviesWatched);

// setItemsLocalStorage(moviesWatched);

// function setItemsLocalStorage(moviesWatched) {
//   const MoviesWatchedStr = JSON.stringify(moviesWatched);
//   localStorage.setItem('watched', MoviesWatchedStr);
// }

// function getItemsLocalStorage(moviesWatched) {
//   const MoviesWatchedStr = JSON.stringify(moviesWatched);
//   localStorage.setItem('watched', MoviesWatchedStr);
// }

// refs.buttonWatched.addEventListener('click', onButtonWatchedClick);

// function onButtonWatchedClick(event) {
//   event.preventDefault();

//   moviesWatched.push(MovieActive);

//   // return moviesWatched;
//   // localStorage.setItem('watched', MovieActiveStr);
// }

// console.log(moviesWatched);

// function onButtonWatchedClick(event) {
//   event.preventDefault();

//   console.log(refs.buttonWatched);

//   localStorage.setItem('watched', 'movie');
// }

// async function getMovieId(event) {
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
//   query = FetchApiMovies.query;

//   console.log(page);
//   console.log('before fetch', FetchApiMovies);

//   if (query === '') {
//     const MovieId = await FetchApiMovies.fetchMoviesByPage(page).then(
//       movies => {
//         console.log(movies);
//         const movieActive = movies.filter(
//           movie => movie.poster_path === ImgActive
//         );
//         console.log(movieActive);

//         const movieId = movieActive[0].id;
//         // console.log(movieId);
//         return movieId;
//       }
//     );
//     console.log(MovieId);
//     await fetchMovieDetailsByIdAndRender(MovieId);
//     // refs.modal.classList.add(`open`);
//     return MovieId;
//   }

//   const MovieId = await FetchApiMovies.fetchMoviesByQuery(query, page).then(
//     movies => {
//       console.log(movies);
//       const movieActive = movies.filter(
//         movie => movie.poster_path === ImgActive
//       );
//       console.log(movieActive);

//       const movieId = movieActive[0].id;
//       console.log(movieId);
//       return movieId;
//     }
//   );
//   await fetchMovieDetailsByIdAndRender(MovieId);
//   refs.modal.classList.add(`open`);
//   return MovieId;
// }

// (function createModal() {
//   function closeModal(event) {
//     event.preventDefault();
//     refs.modal.classList.remove(`open`);
//     clearModal();
//   }

//   refs.buttonClose.addEventListener('click', closeModal);
// })();

// function onButtonWatchedClick(event) {
//   event.preventDefault();

//   console.log(refs.buttonWatched);

//   localStorage.setItem('original_title', 'tom');
// }

// createModal();
