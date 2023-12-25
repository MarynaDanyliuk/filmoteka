import {
  clearPage,
  renderPageNotFound,
  renderHomeHeader,
  renderLibraryHeader,
  renderGallary,
} from './renderServies';

// import { renderLibraryCollection } from './libraryCollection';
import { renderLibraryCollection } from '../firebase/db';
import { fetchMoviesAndRender, fetchGenresListByIds } from './fetchAndRender';
import { showButtonLoad, hideButtonLoad } from './pagination';

// import { user } from '../firebase/db';

// const collectionName = 'users';

export async function homePage(user) {
  // event.preventDefault();
  clearPage();
  renderHomeHeader(user);

  await fetchGenresListByIds();
  await fetchMoviesAndRender();

  showButtonLoad();
}

export async function libraryPage(key, user) {
  clearPage();

  renderLibraryCollection(key, user);

  renderLibraryHeader();

  showButtonLoad();
}

export function notFoundPage() {
  clearPage();

  renderPageNotFound();

  hideButtonLoad();
}
