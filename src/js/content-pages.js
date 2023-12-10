import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
} from './renderServies';

import { renderLibraryCollection } from './libraryCollection';
import { fetchMoviesAndRender, fetchGenresListByIds } from './fetchAndRender';
import { showButtonLoad, hideButtonLoad } from './pagination';

export let key = 'library';

// import { auth } from '../firebase/fb_config';
// const user = auth.currentUser;
// console.log(user);

export async function homePage(user) {
  clearPage();
  renderHomeHeader(user);
  await fetchGenresListByIds();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage() {
  clearPage();

  renderLibraryHeader();

  renderLibraryCollection(key);

  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}
