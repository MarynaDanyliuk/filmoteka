import { refs } from './refs';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

import { clearPage } from './renderServies';
import {
  fetchMoviesByQueryAndRender,
  fetchMoviesByPageAndRender,
} from './fetchAndRender';

// import { smoothScrolling } from './pagination';

let query = '';
let page = 1;

refs.form.addEventListener(`submit`, onFormSubmit);
window.addEventListener('scroll', smoothScrolling);

export async function onFormSubmit(event) {
  event.preventDefault();

  clearPage();
  FetchApiMovies.resetPage();

  // showButtonLoad();
  // console.log(event.currentTarget.elements);
  FetchApiMovies.query = event.currentTarget.elements.searchQuery.value.trim();
  query = FetchApiMovies.query;

  if (FetchApiMovies.query === ``) {
    return;
  }

  page = FetchApiMovies.page;

  await fetchMoviesByQueryAndRender(query, page);
  console.log('BEFORE scroll', FetchApiMovies);
}

export async function smoothScrolling() {
  const documentRect = refs.gallery.getBoundingClientRect();

  if (documentRect.bottom < document.documentElement.clientHeight + 200) {
    // console.log('AFTER scroll', FetchApiMovies);
    // FetchApiMovies.incrementPage();
    await unlimitedScroll();

    console.log('AFTER scroll', FetchApiMovies);
  }
}

export async function unlimitedScroll() {
  FetchApiMovies.incrementPage();

  query = FetchApiMovies.query;
  page = FetchApiMovies.page;
  console.log('before fetch', FetchApiMovies);

  if (query === '') {
    await fetchMoviesByPageAndRender(page);
    console.log('Fetch after scroll', FetchApiMovies);
    return;
  }

  await fetchMoviesByQueryAndRender(query, page);
  // console.log('AFTER scroll:', FetchApiMovies);
}
