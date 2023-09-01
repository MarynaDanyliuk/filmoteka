import axios from 'axios';

import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6de1479941bef67a0c224787b78603f1';

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: `250 ms`,
});

const refs = {
  form: document.querySelector(`.form`),
  button: document.querySelector(`.search-button`),
  gallery: document.querySelector(`.gallery`),
  buttonLoadMore: document.querySelector(`.load-more`),
};

let query = ``;

refs.form.addEventListener(`submit`, onFormSubmit);

async function fetchMovies() {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      const movies = res.results;
      // console.log(movies);
      renderGallary(movies);
    })
    .catch(error => {
      console.log(error);
    });
}

async function fetchMoviesByQuery(query) {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(res => {
      const movie = res.results;
      // console.log(movie);

      if (query === ``) {
        return;
      }

      if (movie.length === 0) {
        return;
      }

      const markup = movie.map(({ poster_path, original_title }) => {
        return poster_path
          ? `<div class="galery__card">
        <a
          class="gallery__link"
          href=https://image.tmdb.org/t/p/w500/${poster_path}
        >
          <img
            class="details__img"
            src=https://image.tmdb.org/t/p/w500/${poster_path}
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
          />
        </a>
      </div>`
          : `<div class="galery__card">
        <a
          class="gallery__link"
          href="../src/images/default_image_large.jpg"
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
      </div>`;
      });
      refs.gallery.insertAdjacentHTML(`beforeend`, markup);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}

async function onFormSubmit(event) {
  event.preventDefault();

  clearGallery();

  query = document.getElementById('search-input').value.trim();

  console.log(query);

  fetchMoviesByQuery(query);
}

fetchMovies();

// async function onFormSubmit(event) {
//   event.preventDefault();
//   const instance = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//   });
//   const { results } = await instance.get(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1`
//   );

//   console.log(results);
//   // return results;

//   clearGallery();
//   hideButtonLoad();

//   getImagesApiService.query =
//     event.currentTarget.elements.searchQuery.value.trim();

//   getImagesApiService.resetPage();

//   if (getImagesApiService.query === ``) {
//     return;
//   }
//   // ________________FUNCTION async await___________________
//   try {
//     const images = await getImagesApiService.fetchImages(word);

//     if (images.length === 0) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       hideButtonLoad();
//       clearGallery();
//       return;
//     }

//     if ((getImagesApiService.page = 1 && images.length !== 0)) {
//       Notiflix.Notify.success(
//         `Hooray! We found ${getImagesApiService.totalHits} images.`
//       );

//       getImagesApiService.incrementPage();

//       renderGallary(images);
//       showButtonLoad();
//       console.log(
//         `После запроса, если все ок - наш объект`,
//         getImagesApiService
//       );
//     }
//   } catch (error) {
//     console.log(`Error`);
//   }
//   // __________________________________________________
// }

// ________FUNCTION Promise____________
// getImagesApiService.fetchImages(word).then(images => {
//   if (images.length === 0) {
//     Notiflix.Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//     hideButtonLoad();
//     clearGallery();
//     return;
//   }

//   if ((getImagesApiService.page = 1 && images.length !== 0)) {
//     Notiflix.Notify.success(
//       `Hooray! We found ${getImagesApiService.totalHits} images.`
//     );
//   }

//   getImagesApiService.incrementPage();

//   renderGallary(images);
//   showButtonLoad();
//   console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
// });
// ________________________________________

refs.buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);

async function onButtonLoadMoreClick(event) {
  const limit = getImagesApiService.totalHits;
  // ________COUNTER___________________
  // console.log(getImagesApiService.page * getImagesApiService.per_page);

  // console.log(getImagesApiService.page);
  // ______________________________________

  // ___________FUNCTION Promise__________________
  // getImagesApiService.fetchImages(word).then(images => {
  //   if (getImagesApiService.page * getImagesApiService.per_page >= limit) {
  //     Notiflix.Notify.info(
  //       `We're sorry, but you've reached the end of search results.`
  //     );
  //     console.log(`Вы достигли лимита`);
  //     hideButtonLoad();
  //   }

  //   getImagesApiService.incrementPage();
  //   console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
  //   renderGallary(images);
  //   smoothScrolling();
  // });
  // _________________________________________________

  // ____________FUNCTION acync await_________________

  try {
    const images = await getImagesApiService.fetchImages(word);
    if (getImagesApiService.page * getImagesApiService.per_page >= limit) {
      Notiflix.Notify.info(
        `We're sorry, but you've reached the end of search results.`
      );
      console.log(`Вы достигли лимита`);
      hideButtonLoad();
    }

    getImagesApiService.incrementPage();
    console.log(`После запроса, если все ок - наш объект`, getImagesApiService);
    renderGallary(images);
    smoothScrolling();
  } catch (error) {
    console.log(`Error`);
  }
}
// ______________________________________________________

refs.gallery.addEventListener(`click`, onGalleryClick);

let ImgActive = null;

function onGalleryClick(event) {
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

  ImgActive = nextImgActive.getAttribute(`src`);
  console.log(ImgActive);
}

// ___________FUNCTIONS_______________

function renderGallary(movies) {
  const markup = movies
    .map(({ poster_path, original_title }) => {
      return poster_path
        ? `<div class="galery__card">
        <a
          class="gallery__link"
          href=https://image.tmdb.org/t/p/w500/${poster_path}
        >
          <img
            class="details__img"
            src=https://image.tmdb.org/t/p/w500/${poster_path}
          alt=${original_title}
            width="300px"
            height="450px"
            loading="lazy"
          />
        </a>
      </div>`
        : `<div class="galery__card">
        <a
          class="gallery__link"
          href="../src/images/default_image_large.jpg"
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
      </div>`;
    })
    .join(``);
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
  lightbox.refresh();
}

function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function showButtonLoad() {
  refs.buttonLoadMore.classList.remove(`not-visible`);
  // lightbox.refresh();
}

function hideButtonLoad() {
  refs.buttonLoadMore.classList.add(`not-visible`);
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
