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

