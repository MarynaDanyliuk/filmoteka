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

// import { fetchGenresListByIdsAndRender } from './fetchAndRender';
// import { renderGallary, renderG } from './renderServies';
// export async function getGenres() {
//   const allGenres = await fetchGenresListByIdsAndRender();
//   setItemsLocalStorage('genres', allGenres);
// }
// const genresMovie = allGenres.filter(genre => genre_ids.includes(genre.id));

// const genresMovieName = genresMovie.map(genre => {
//   return genre.name;
// });

// renderG(genresMovieName);

// return genresMovieName;

// function onFulfilled(allGenres) {
//   //   const genresMovie = allGenres.filter(genre => genre_ids.includes(genre.id));
//   //   console.log(genresMovie);

//   console.log('rere', allGenres);

//   return `<li class="movie_genres">${allGenres}</li>`;
//   // refs.gallery.insertAdjacentHTML(`beforeend`, markup);
// }

// function onRejected(error) {
//   console.log('error', error);
// }
