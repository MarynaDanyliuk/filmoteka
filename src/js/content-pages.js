import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
} from './renderServies';

import { renderLibraryCollection } from './libraryCollection';
import { fetchMoviesAndRender, fetchGenresListByIds } from './fetchAndRender';
import { showButtonLoad, hideButtonLoad } from './pagination';

export let key = 'watched';

export async function homePage(user) {
  clearPage();
  renderHomeHeader(user);
  await fetchGenresListByIds();
  await fetchMoviesAndRender();
  showButtonLoad();
}

export async function libraryPage() {
  clearPage();

  renderLibraryCollection(key);

  renderLibraryHeader();

  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}
