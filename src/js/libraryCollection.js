import { getItemsLocalStorage } from './localStorageService';
import { refs } from './refs';

import { renderGallary } from './renderServies';

export function renderLibraryCollection(key) {
  if (key === 'watched') {
    refs.buttonWatched.classList.add('active_btn');
    refs.buttonQueue.classList.remove('active_btn');
  } else if (key === 'queue') {
    refs.buttonQueue.classList.add('active_btn');
    refs.buttonWatched.classList.remove('active_btn');
  }
  const libraryCollection = getItemsLocalStorage(key);

  if (libraryCollection) {
    return renderGallary(libraryCollection);
  }
}
