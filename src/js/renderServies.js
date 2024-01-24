import { refs } from './refs';

import default_image_large from '../images/default_image_large.jpg';
import PageNotFound from '../images/PageNotFound.jpg';
import icons from '../images/icons.svg';

import { getGenresMovie } from './genres';
import { openModalDelete } from './modal';

export function renderGallary(movies, user) {
  // console.log(movies);
  const markup = movies.map(
    ({
      poster_path,
      original_title,
      id,
      genre_ids,
      genres,
      release_date,
      vote_average,
    }) => {
      return MovieCard({
        poster_path,
        original_title,
        id,
        genre_ids,
        genres,
        release_date,
        vote_average,
      });
    }
  );

  refs.gallery.insertAdjacentHTML(`beforeend`, markup.join(''));
  refs.buttonDelete = refs.gallery.querySelectorAll('.delete-button');

  const btnDelete = refs.buttonDelete;

  if (btnDelete) {
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', openModalDelete);
    }
  }
  if (user) {
    btnDelete.forEach(button => {
      button.classList.remove('not-visible');
    });
  }
}

export function MovieCard({
  poster_path,
  original_title,
  id,
  genre_ids,
  genres,
  release_date,
  vote_average,
}) {
  const releaseYear = new Date(release_date).getFullYear();

  const markupMovieCard = poster_path
    ? `<li class="gallery-card">
         <a
           class="gallery_link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
         >
         <div class="wrapper">
             <img
           id="${id}"
             class="movie_img"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
             alt="${original_title}"
           loading="lazy"
           />
      <button  type="submit" class="delete-button not-visible">
          <svg class="icon">   
              <use href="${icons}#icon-bin"></use>
          </svg>
      </button>
         </div>

             <p class="movie-title card">${original_title}</p>

         <div class="movie_describtion">
          <ul class="movie_genresList">${renderGenres(genres, genre_ids)}</ul>
           <p>${releaseYear}</p>
           <p class="movie_average">${vote_average.toFixed(1)}</p>
         </div>
         </a>      
  </li>`
    : `<li class="gallery-card">
         <a
           class="gallery__link"
          href="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
         >
           <img
           id="${id}"
            class="movie_img"
             src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
             alt="${original_title}"
             loading="lazy"   
           />
          <p class="movie-title card">${original_title}</p>
         <div class="movie_describtion">
           <ul>${renderGenres(genres, genre_ids)}</ul>
           <p>${releaseYear}</p>
           <p class="movie_average">${vote_average.toFixed(1)}</p>
         </div>
         </a>
      </li>`;

  return markupMovieCard;
  // refs.gallery.insertAdjacentHTML(`beforeend`, markupMovieCard);
}

export function renderMovieImage({ poster_path, original_title }) {
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const movieImageMarkup = poster_path
    ? `<img
          src=${url}
          alt=${original_title}
          class="modal-image"
          loading="lazy"
        />`
    : `<img
          src='${default_image_large}'
          alt="default image"
          class="modal-image"
          loading="lazy"
        />`;
  refs.movieImage.insertAdjacentHTML(`beforeend`, movieImageMarkup);
}

export function renderMovieDescription({
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  const genresList = genres
    .map(({ name }) => {
      return name;
    })
    .join(', ');
  const movieDescrMarkup = `
        <div>
          <h1 class="movie-title">${original_title}</h1>
          <table class="movie-table">
            <tr class="movie_info_item">
              <td class="list-category">Vote/Votes</td>
              <td class="list-data"><span class="average">${vote_average.toFixed(
                1
              )}</span> / <span class="count">${vote_count}</span></td>
            </tr>
            <tr class="movie_info_item">
              <td class="list-category">Popularity</td>
              <td class="list-data">${popularity.toFixed(1)}</td>
            </tr>
            <tr class="movie_info_item">
              <td class="list-category">Original Title</td>
              <td class="list-data" style="text-transform: uppercase">${original_title}</td>
            </tr>
            <tr class="movie_info_item">
              <td class="list-category">Genre</td>
              <td class="list-data genres">${genresList}</td>
            </tr>
          </table>
          <p class="movie-title about">About</p>
          <p class="movie-about">
          ${overview}
          </p>
        </div>

  `;
  refs.movieDescr.insertAdjacentHTML(`beforeend`, movieDescrMarkup);
}

export function clearPage() {
  refs.gallery.innerHTML = '';
  refs.thumb.innerHTML = '';
}

export function renderHomeHeader(user) {
  refs.input.value = '';
  refs.homeBtn.classList.add('nav_item--current');
  refs.libraryBtn.classList.remove('nav_item--current');
  refs.headerNavButtons.classList.add('not-visible');
  refs.form.classList.remove('not-visible');
  if (!user) {
    refs.user.innerHTML = '';
    refs.signOut.classList.add('not-visible');
  }
}

export function renderLibraryHeader() {
  refs.homeBtn.classList.remove('nav_item--current');
  refs.libraryBtn.classList.add('nav_item--current');
  refs.buttonWatched.classList.add('active_btn');
  refs.headerNavButtons.classList.remove('not-visible');
  refs.form.classList.add('not-visible');
}

export function renderPageNotFound() {
  const markup = `
   <img 
   src="${PageNotFound}"
   alt="pageNotFound"
   class="page-not-found"
   loading="lazy"
   
 />
   `;
  refs.thumb.insertAdjacentHTML(`beforeend`, markup);
}

export const renderGenres = (genres, genre_ids) => {
  if (genres) {
    const genresList = genres
      .splice(0, 2)
      .map(({ name }) => {
        return name;
      })
      .join(', ');
    return genres.length >= 3
      ? `<li class="movie_gnr">${genresList}, Other</li>`
      : `<li class="movie_gnr">${genresList}</li>`;
  } else if (genre_ids) {
    const genresList = getGenresMovie(genre_ids).splice(0, 2).join(', ');
    return genre_ids.length >= 3
      ? `<li class="movie_gnr">${genresList}, Other</li>`
      : `<li class="movie_gnr">${genresList}</li>`;
  }
};

// _________________________________________________________
