import { refs } from './refs';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

let query = FetchApiMovies.query;
let page = FetchApiMovies.page;

import {
  fetchMoviesByPageAndRender,
  fetchMoviesByQueryAndRender,
} from './fetchAndRender';

// export async function onButtonLoadMoreClick(event) {
//   event.preventDefault();
//   console.log('BEFORE FETCH', FetchApiMovies);
//   FetchApiMovies.incrementPage();
//   page = FetchApiMovies.page;

//   if (query === '') {
//     await fetchMoviesByPageAndRender(page);
//     // FetchApiMovies.incrementPage();
//   }

//   query = FetchApiMovies.query;

//   await fetchMoviesByQueryAndRender(query, page);

//   console.log('AFTER FETCH', FetchApiMovies);
// }

// export async function smoothScrolling(event) {
//   const documentRect = refs.gallery.getBoundingClientRect();

//   // FetchApiMovies.query =
//   //   event.currentTarget.elements.searchQuery.value.trim();

//   if (documentRect.bottom < document.documentElement.clientHeight + 200) {
//     // console.log('AFTER scroll', FetchApiMovies);
//     // FetchApiMovies.incrementPage();
//     await unlimitedScroll();

//     // console.log('AFTER scroll', FetchApiMovies);
//   }
// }

// _________________FUNC______________________

// export async function unlimitedScroll() {
//   FetchApiMovies.incrementPage();

//   query = FetchApiMovies.query;
//   page = FetchApiMovies.page;

//   if (query === '') {
//     // FetchApiMovies.incrementPage();

//     await fetchMoviesByPageAndRender(page);
//     console.log('Fetch after scroll', FetchApiMovies);
//     return;
//   }

//   await fetchMoviesByQueryAndRender(query, page);
//   console.log('AFTER scroll:', FetchApiMovies);
// }

export function showButtonLoad() {
  refs.buttonLoadMore.classList.remove(`not-visible`);
}

export function hideButtonLoad() {
  refs.buttonLoadMore.classList.add(`not-visible`);
}
