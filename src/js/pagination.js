import { refs } from './refs';

export function showButtonLoad() {
  refs.buttonLoadMore.classList.remove(`not-visible`);
}

export function hideButtonLoad() {
  refs.buttonLoadMore.classList.add(`not-visible`);
}

//______________________pagination______________________________

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
