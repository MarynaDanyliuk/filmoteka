import { getItemsLocalStorage } from './localStorageService';

export function getGenresMovie(genre_ids) {
  const allGenres = getItemsLocalStorage('genres') || [];
  if (allGenres) {
    const genresMovie = allGenres.filter(genre => genre_ids.includes(genre.id));

    return genresMovie.map(genre => {
      return genre.name;
    });
  }
  return;
}

