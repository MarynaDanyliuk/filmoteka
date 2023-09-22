import { refs } from './refs';
import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';

import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

let ImgActive = null;

refs.gallery.addEventListener(`click`, onGalleryClick);

export async function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }
  const CurrentActiveImg = document.querySelector(`.img--active`);

  console.log(CurrentActiveImg);

  if (CurrentActiveImg) {
    event.target.classList.remove(`.img--active`);
  }

  const nextImgActive = event.target;
  nextImgActive.classList.add(`.img--active`);
  console.log(event.target);

  ImgActive = nextImgActive.getAttribute(`src`).slice(31);
  console.log(ImgActive);

  const MovieId = await FetchApiMovies.fetchMovies().then(movies => {
    console.log(movies);
    const movieActive = movies.filter(movie => movie.poster_path === ImgActive);
    console.log(movieActive);

    const movieId = movieActive[0].id;
    console.log(movieId);
    return movieId;
  });

  await fetchMovieDetailsByIdAndRender(MovieId);
  refs.modal.classList.add(`open`);
}
