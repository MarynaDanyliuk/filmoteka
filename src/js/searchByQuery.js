import { refs } from './refs';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { clearPage } from './renderServies';
import {
  fetchMoviesByQueryAndRender,
  fetchMoviesByPageAndRender,
  fetchMovieDetailsByIdAndRender,
} from './fetchAndRender';

let query = '';
let page = 1;

refs.form.addEventListener(`submit`, onFormSubmit);
refs.buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);
// window.addEventListener('scroll', smoothScrolling);
refs.gallery.addEventListener(`click`, onGalleryClick);

export async function onFormSubmit(event) {
  event.preventDefault();

  clearPage();
  FetchApiMovies.resetPage();

  FetchApiMovies.query = event.currentTarget.elements.searchQuery.value.trim();
  query = FetchApiMovies.query;

  if (FetchApiMovies.query === ``) {
    return;
  }

  page = FetchApiMovies.page;

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

export async function smoothScrolling(event) {
  event.preventDefault();
  const documentRect = refs.gallery.getBoundingClientRect();

  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    console.log('BEFORE scroll', FetchApiMovies);
    await unlimitedScroll();

    console.log('AFTER scroll', FetchApiMovies);
  }
}

export async function unlimitedScroll() {
  FetchApiMovies.incrementPage();

  query = FetchApiMovies.query;
  page = FetchApiMovies.page;

  if (query === '') {
    await fetchMoviesByPageAndRender(page);
    return;
  }

  await fetchMoviesByQueryAndRender(query, page);
}

export async function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }
  const CurrentActiveImg = document.querySelector(`.img--active`);

  console.log(CurrentActiveImg);

  if (CurrentActiveImg) {
    event.target.classList.remove(`.img--active`);
  }

  const nextImgActive = event.target;
  nextImgActive.classList.add(`.img--active`);
  console.log(event.target);

  ImgActive = nextImgActive.getAttribute(`src`).slice(31);
  console.log(ImgActive);

  page = FetchApiMovies.page;
  query = FetchApiMovies.query;

  console.log(page);
  console.log('before fetch', FetchApiMovies);

  if (query === '') {
    const MovieId = await FetchApiMovies.fetchMoviesByPage(page).then(
      movies => {
        console.log(movies);
        const movieActive = movies.filter(
          movie => movie.poster_path === ImgActive
        );
        console.log(movieActive);

        const movieId = movieActive[0].id;
        console.log(movieId);
        return movieId;
      }
    );
    await fetchMovieDetailsByIdAndRender(MovieId);
    refs.modal.classList.add(`open`);
    return;
  }

  const MovieId = await FetchApiMovies.fetchMoviesByQuery(query, page).then(
    movies => {
      console.log(movies);
      const movieActive = movies.filter(
        movie => movie.poster_path === ImgActive
      );
      console.log(movieActive);

      const movieId = movieActive[0].id;
      console.log(movieId);
      return movieId;
    }
  );

  await fetchMovieDetailsByIdAndRender(MovieId);
  refs.modal.classList.add(`open`);
}
