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
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}

export function renderModalMovieDetails({ poster_path, original_title }) {
  const movieCardMarkup = `
    <div class="modal_body">
    <div class="modal_content">
  <a href="" class="modal_close">X</a>
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
          <button type="submit" class="button">Add to watched</button>
          <button type="submit" class="button">Add to queue</button>
        </div>
        </div>
        </div>
      </div>`;
  refs.modal.insertAdjacentHTML(`beforeend`, movieCardMarkup);
  console.log('повертаю Муві');
}
