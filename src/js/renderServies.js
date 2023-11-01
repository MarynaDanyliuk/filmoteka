import { refs } from './refs';
import { getGenresMovie } from './genres';

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
  const movieImageMarkup = poster_path
    ? `<img
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${original_title}
          class="image"
          
        />`
    : `<img
          src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
          alt="default image"
          class="image"
          style="object-fit: cover"
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
}

export function renderHomeHeader() {
  refs.input.value = '';
  refs.homeBtn.classList.add('nav_item--current');
  refs.libraryBtn.classList.remove('nav_item--current');
  refs.headerNavButtons.classList.add('not-visible');
  refs.form.classList.remove('not-visible');
}

export function renderLibraryHeader() {
  refs.homeBtn.classList.remove('nav_item--current');
  refs.libraryBtn.classList.add('nav_item--current');
  refs.headerNavButtons.classList.remove('not-visible');
  refs.form.classList.add('not-visible');
}

export function renderPageNotFound() {
  const markupPageNotFound = `
   <img class="page-not-found"
   src=""
   alt=""
 />
   `;
  refs.content.insertAdjacentHTML(`beforeend`, markupPageNotFound);
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
           
             loading="lazy"
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
             class="details__img"
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

// const markup = movies
//   .map(({ poster_path, original_title, id }) => {
//     return poster_path
//   ? `<li class="galery__card">
//   <a
//     class="gallery__link"
//     href="https://image.tmdb.org/t/p/w500${poster_path}"
//   >
//     <img
//     id="${id}"
//       class="details__img"
//       src="https://image.tmdb.org/t/p/w500${poster_path}"
//       alt=${original_title}
//       width="300px"
//       height="450px"
//       loading="lazy"
//     />
//   </a>
// </li>`
//       : `<li class="galery__card">
//       <a
//         class="gallery__link modal_open"
//         href='https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg'
//       >
//         <img
//             id="${id}"
//           class="details__img"
//           src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
//         alt=${original_title}
//           width="300px"
//           height="450px"
//           loading="lazy"
//           style="{object-fit: cover}"
//         />
//       </a>
//     </li>`;
//   })
//   .join(``);

// import { fetchGenresListByIdsAndRender } from './fetchAndRender';
// import { all } from 'axios';
// import { getGenres } from './genres';

// <p>${vote_average}</p>;

// const markupMovieCard = `<li class="gallery_card">
//        <a
//          class="gallery__link"
//         href="https://image.tmdb.org/t/p/w500${poster_path}"
//        >
//          <img
//          id="${id}"
//            class="details__img"
//            src="https://image.tmdb.org/t/p/w500${poster_path}"
//            alt="${original_title}"

//            loading="lazy"
//          />
//            <p class="movie_title card">${original_title}</p>
//        <div class="movie_describtion">
//        <ul id="genres">
//        ${renderGenres(genres, genre_ids)}
//        </ul>
//          <p>${release_date}</p>
//          <p>${vote_average}</p>
//        </div>
//        </a>
//     </li>`;

// poster_path
//   ? markupMovieCard
//   : `<li class="gallery_card">
//        <a
//          class="gallery__link"
//         href="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
//        >
//          <img
//          id="${id}"
//            class="details__img"
//            src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
//            alt="${original_title}"

//            loading="lazy"
//          />
//        </a>
//     </li>`;
// export function renderG(result) {
//   return `<li class="movie_gnr">${result}</li>`;
//   // const markup = `<ul class="movie_genres">${result
//   //   .map(genre => {
//   //     return `<li class="movie_gnr">${genre}</li>`;
//   //   })
//   //   .join('')}</ul>`;
//   // const markup = result
//   //   .map(genre => {
//   //     return `<li class="movie_genres">${genre}</li>`;
//   //   })
//   //   .join('');
//   // refs.genresList.insertAdjacentElement('afterend', markup);
//   // refs.gallery.insertAdjacentHTML(`beforeend`, markup);
// }

// const genresMarkup = genres
//   .map(({ name }) => {
//     return `<li class="movie_genres">${name}</li>`;
//   })
//   .join('');

// ________________DRAFT___________________________

// getGenres(genre_ids).then(result => {
//   console.log(result);
//   return result
//     .map(({ name }) => {
//       return `<li class="movie_genres">${name}</li>`;
//     })
//     .join('');
// });
// const renderGenres = (genres, genre_ids) => {
//   if (genres) {
//     return genres
//       .map(({ name }) => {
//         return `<li class="movie_genres">${name}</li>`;
//       })
//       .join('');
//   } else {
//     getGenres(genre_ids)
//       .then(result => {
//         console.log(result);
//         renderG(result);
//       })
//       .catch(alert);
//   }
// };

// console.log(genresList);
// return `<li class="movie_gnr">${getGenresMovie(genre_ids)}</li>`;
// getGenres(genre_ids).then(result => {
//   console.log(result);
//   // renderG(result);
// });

//  genresList
//  .map(({ name }) => {
//    return `<li class="movie_genres">${name}</li>`;
//  })
// .join('')

// style="text-transform: uppercase; margin-bottom: 8px"

//   width = '300px';
// height = '450px';

//      width = '300px';
//      height = '450px';

// <div class="modal_body">
//   <div class="modal_content">
// <a href="" class="modal_close">X</a>

//   </div>
// </div>
// ________________________________________________________________
// export function renderHeaderHome() {
//   const markup = `
//     <input
//           type="text"
//           id="search-input"
//           name="searchQuery"
//           autocomplete="off"
//           placeholder="Search films..."
//         />
//         <button type="submit" class="search-button">
//           <svg class="icon">
//             <use href="./images/icons.svg#icon-search"></use>
//           </svg>
//         </button>
// `;
//   refs.headerContent.insertAdjacentHTML(`beforeend`, markup);
// }

// export function renderHeaderLibrary() {
//   const markup = `
//   <ul class="nav_list_button">
//     <li class="nav_button">
//         <button type="submit" class="button">Watched</button>
//     </li>
//   <li class="nav_button">
//         <button type="submit" class="button">QUEUE</button>
//     </li>
//   </ul>
//   `;
//   refs.headerContent.insertAdjacentHTML(`beforeend`, markup);
// }
