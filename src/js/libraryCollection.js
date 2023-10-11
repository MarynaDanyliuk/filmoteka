import { getItemsLocalStorage } from './localStorageService';

import { renderGallary } from './renderServies';

export function renderLibraryCollection(key) {
  const libraryCollection = getItemsLocalStorage(key);

  if (libraryCollection) {
    return renderGallary(libraryCollection);
  }
}

// import fetchApiMovies from './apiService';
// const FetchApiMovies = new fetchApiMovies();

// import { refs } from './refs';
// const id = async function getMovieActiveId() {
//   const MovieActiveId = await ModalOpen().then(id => {
//     console.log(id);
//   });
//   console.log(MovieActiveId);
// };

// console.log(id);

// import { closeModal, ModalOpen } from './modal';

// let moviesWatched = [];
// let moviesQueue = [];
// let moviesLibrary = [];
// // let MovieActive = null;
// MovieActiveId = FetchApiMovies.movieId;
// let key = 'watched';

// refs.buttonWatched.addEventListener('click', onButtonWatchedClick);
// refs.buttonQueue.addEventListener('click', onButtonQueueClick);

// export function createLibraryCollection(key) {
//   const promise1 = new Promise((resolve, reject) => {});

//   console.log(promise1);
// }
// createLibraryCollection();
