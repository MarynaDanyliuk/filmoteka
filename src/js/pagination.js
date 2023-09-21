import { refs } from './refs';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import {
  fetchMoviesByPageAndRender,
  fetchMoviesByQueryAndRender,
} from '../index.js';

export async function onButtonLoadMoreClick(event) {
  event.preventDefault();
  console.log('BEFORE FETCH', FetchApiMovies);
  FetchApiMovies.incrementPage();
  page = FetchApiMovies.page;

  if (query === '') {
    await fetchMoviesByPageAndRender(page);
    FetchApiMovies.incrementPage();
  }

  query = FetchApiMovies.query;

  await fetchMoviesByQueryAndRender(query, page);

  console.log('AFTER FETCH', FetchApiMovies);
}

export async function smoothScrolling() {
  const documentRect = refs.gallery.getBoundingClientRect();

  if (documentRect.bottom < document.documentElement.clientHeight + 200) {
    console.log(FetchApiMovies);
    await unlimitedScroll();
  }
}

// _________________FUNC______________________

export async function unlimitedScroll() {
  FetchApiMovies.incrementPage();
  query = FetchApiMovies.query;
  page = FetchApiMovies.page;

  if (query === '') {
    await fetchMoviesByPageAndRender(page);
    console.log('AFTER FETCH', FetchApiMovies);
  }

  await fetchMoviesByQueryAndRender(query, page);
  console.log('AFTER FETCH', FetchApiMovies);
}

export function showButtonLoad() {
  refs.buttonLoadMore.classList.remove(`not-visible`);
}

export function hideButtonLoad() {
  refs.buttonLoadMore.classList.add(`not-visible`);
}
