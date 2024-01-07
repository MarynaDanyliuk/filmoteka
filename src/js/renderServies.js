import { refs } from './refs';
import { getGenresMovie } from './genres';
import { default_User } from '../images/default_User.jpg';
import default_image_large from '../images/default_image_large.jpg';
import PageNotFound from '../images/PageNotFound.jpg';

export function renderGallary(movies) {
  const markup = movies
    .map(
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
    )
    .join('');
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}

export function renderMovieImage({ poster_path, original_title }) {
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const movieImageMarkup = poster_path
    ? `<img
          src=${url}
          alt=${original_title}
          class="image"
          loading="lazy"
        />`
    : `<img
          src='${default_image_large}'
          alt="default image"
          class="image"
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
        <div class="movie_descr">
          <h1 class="movie_title">${original_title}</h1>
          <table class="movie_inform">
            <tr class="movie_info_item">
              <td class="list_category">Vote/Votes</td>
              <td class="list_data"><span class="average">${vote_average.toFixed(
                1
              )}</span> / <span class="count">${vote_count}</span></td>
            </tr>
            <tr class="movie_info_item">
              <td class="list_category">Popularity</td>
              <td class="list_data">${popularity.toFixed(1)}</td>
            </tr>
            <tr class="movie_info_item">
              <td class="list_category">Original Title</td>
              <td class="list_data" style="text-transform: uppercase">${original_title}</td>
            </tr>
            <tr class="movie_info_item">
              <td class="list_category">Genre</td>
              <td class="list_data genres">${genresList}</td>
            </tr>
          </table>
          <p class="movie_title about">About</p>
          <p class="movie_about">
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

export function renderUser(user) {
  const markup = `<p>${user.email}</p>`;
  refs.user.insertAdjacentHTML(`beforeend`, markup);
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
    ? `<li class="gallery_card">
         <a
           class="gallery_link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
         >
           <img
           id="${id}"
             class="movie_img"
             src="https://image.tmdb.org/t/p/w500${poster_path}"
             alt="${original_title}"
           
           />
             <p class="movie_title card">${original_title}</p>
         <div class="movie_describtion">
          <ul class="movie_genresList">${renderGenres(genres, genre_ids)}</ul>
           <p>${releaseYear}</p>
           <p class="movie_average">${vote_average.toFixed(1)}</p>
         </div>
         </a>      
  </li>`
    : `<li class="gallery_card">
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
          <p class="movie_title card">${original_title}</p>
         <div class="movie_describtion">
           <ul>${renderGenres(genres, genre_ids)}</ul>
           <p>${releaseYear}</p>
           <p class="movie_average">${vote_average.toFixed(1)}</p>
         </div>
         </a>
      </li>`;
  refs.gallery.insertAdjacentHTML(`beforeend`, markupMovieCard);
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

export function renderGallaryCard(movies) {
  const markup = movies
    .map(({ poster_path, original_title, id }) => {
      return poster_path
        ? `<li class="galery__card">
        <a
          class="gallery__link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
        >
          <img
            id="${id}"
            class="details__img"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
          />
        </a>
      </li>`
        : `<li class="galery__card">
        <a
          class="gallery__link modal_open"
          href='../src/images/default_image_large.jpg'
        >
          <img
                id="${id}"
            class="details__img"
            src="../src/images/default_image_large.jpg"
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
          />
        </a>
      </li>`;
    })
    .join(``);
  // refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}

export function renderModalMovieDetails({ poster_path, original_title }) {
  const movieCardMarkup = `
  <div class="movie_card">
        <img
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${original_title}
          class="image"
        />
        <div class="movie_descr">
          <p class="movie_title">${original_title}</p>
          <table class="movie_info">
            <tr class="movie_info_item">
              <td>11</td>
              <td>12</td>
            </tr>
            <tr class="movie_info_item">
              <td>21</td>
              <td>22</td>
            </tr>
            <tr class="movie_info_item">
              <td>31</td>
              <td>32</td>
            </tr>
            <tr class="movie_info_item">
              <td>41</td>
              <td>42</td>
            </tr>
          </table>
          <p>About</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            nostrum inventore sint, consectetur i ncidunt rerum, adipisci
            suscipit fugit at similique sequi explicabo tempora provident harum
            eaque dolorem dignissimos, praesentium architecto!
          </p>
        
        </div>
        </div>
      `;
  // refs.modalContent.insertAdjacentHTML(`beforeend`, movieCardMarkup);
  // console.log('повертаю Муві');
}

//  style = 'width: 375px; height: 478px';
