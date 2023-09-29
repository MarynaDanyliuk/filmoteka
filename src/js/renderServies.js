import { refs } from './refs';

export function renderGallary(movies) {
  const markup = movies
    .map(({ poster_path, original_title }) => {
      return poster_path
        ? `<li class="galery__card">
        <a
          class="gallery__link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
        >
          <img
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
          href='https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg'
        >
          <img
            class="details__img"
            src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
            style="{object-fit: cover}"
          />
        </a>
      </li>`;
    })
    .join(``);
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}

export function renderGallaryCard(movies) {
  const markup = movies
    .map(({ poster_path, original_title }) => {
      return poster_path
        ? `<li class="galery__card">
        <a
          class="gallery__link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
        >
          <img
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
  // contentDiv.insertAdjacentHTML(`beforeend`, markup);
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}

export function renderMovieImage({ poster_path, original_title }) {
  const movieImageMarkup = `

   <img
          src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${original_title}
          class="image"
        />

  `;
  refs.movieCard.insertAdjacentHTML(`beforeend`, movieImageMarkup);
}

export function renderMovieDescription({ original_title }) {
  const movieMovieDescrMarkup = `
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

  `;
  refs.movieDescr.insertAdjacentHTML(`beforeend`, movieMovieDescrMarkup);
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

//   <button id="buttonAdd" type="submit" class="button btn_modal">Add to watched</button>
// <button type="submit" class="button btn_modal">Add to queue</button>

export function clearPage() {
  refs.input.innerHTML = '';
  refs.gallery.innerHTML = '';
}

export function clearModal() {
  refs.movieCard.innerHTML = '';
  refs.movieDescr.innerHTML = '';
}

export function PageNotFound() {
  const markupPageNotFound = `
   <img class="page-not-found"
   src=''
   alt=""
 />
   `;
  refs.content.insertAdjacentHTML(`beforeend`, markupPageNotFound);
}

// ________________________________________________

export function MovieCard() {
  return `<li class="galery__card">
        <a
          class="gallery__link"
          href="https://image.tmdb.org/t/p/w500${poster_path}"
        >
          <img
            class="details__img"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
          />
        </a>
      </li>`;
}

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
