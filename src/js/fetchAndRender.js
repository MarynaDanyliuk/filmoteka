import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import {
  renderGallary,
  renderMovieImage,
  renderMovieDescription,
} from './renderServies';

import { setItemsLocalStorage } from './localStorageService';

export async function fetchMoviesAndRender() {
  try {
    await FetchApiMovies.fetchMovies().then(movies => {
      renderGallary(movies);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesByQueryAndRender(query, page) {
  try {
    await FetchApiMovies.fetchMoviesByQuery(query, page).then(movies => {
      renderGallary(movies);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetailsByIdAndRender(MovieId) {
  try {
    await FetchApiMovies.fetchMovieDetailsById(MovieId).then(movie => {
      // renderModalMovieDetails(movie);
      renderMovieImage(movie);
      renderMovieDescription(movie);
      // console.log(movie);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesByPageAndRender(page) {
  try {
    await FetchApiMovies.fetchMoviesByPage(page).then(movies => {
      // renderGallaryCard(movies);
      renderGallary(movies);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchGenresListByIds() {
  try {
    const allGenresByIds = await FetchApiMovies.fetchGenresListByIds();
    setItemsLocalStorage('genres', allGenresByIds);
  } catch (error) {
    console.log(error.message);
  }
}

// ______________________________________________________
// export async function fetchMoviesAndRender(user) {
//   try {
//     if (user) {
//       await FetchApiMovies.fetchMovies().then(movies => {
//         renderGallary(movies, user);
//       });
//     } else
//       await FetchApiMovies.fetchMovies().then(movies => {
//         renderGallary(movies);
//       });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
