import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import {
  renderGallary,
  renderModalMovieDetails,
} from './renderServies';

export async function fetchMoviesAndRender() {
  try {
    await FetchApiMovies.fetchMovies().then(movies => {
      console.log(movies);
      renderGallary(movies);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesByQueryAndRender(query, page) {
  try {
    await FetchApiMovies.fetchMoviesByQuery(query, page).then(movies => {
      // console.log(movies);
      renderGallary(movies);
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetailsByIdAndRender(MovieId) {
  try {
    await FetchApiMovies.fetchMovieDetailsById(MovieId).then(movie => {
      renderModalMovieDetails(movie);
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
