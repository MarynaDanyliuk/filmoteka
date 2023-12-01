import { getItemsLocalStorage } from './localStorageService';

import { renderGallary } from './renderServies';

export function renderLibraryCollection(key) {
  const libraryCollection = getItemsLocalStorage(key);

  if (libraryCollection) {
    return renderGallary(libraryCollection);
  }
}
