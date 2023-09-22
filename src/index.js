import './js/modal';
import './js/refs';
import './js/apiService';
import './js/renderServies';
import './js/fetchAndRender';
import './js/routing';
import './js/searchByQuery';
import './js/pagination';

// import Notiflix from 'notiflix';

// import fetchApiMovies from './js/apiService';

// const FetchApiMovies = new fetchApiMovies();

// import {
//   renderGallary,
//   renderModalMovieDetails,
//   clearPage,
// } from './js/renderServies';

// import {
//   showButtonLoad,
//   hideButtonLoad,
//   // unlimitedScroll,
//   // smoothScrolling,
// } from './js/pagination';

// import { renderContent } from './js/routing';

// import { refs } from './js/refs';

// let ImgActive = null;
// let query = '';
// let page = 1;

// refs.form.addEventListener(`submit`, onFormSubmit);
// refs.gallery.addEventListener(`click`, onGalleryClick);
// refs.buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);
// window.addEventListener('scroll', smoothScrolling);
// window.addEventListener('hashchange', renderContent);

// renderContent();

// async function renderContent() {
//   const route = window.location.hash.substring(1);

//   console.log(route);

//   if (route === '/' || route === '') {
//     clearPage();
//     // renderHeaderHome();
//     await fetchMoviesByPageAndRender(page);

//     console.log('BEFORE', FetchApiMovies);
//   } else if (route === '/library') {
//     clearPage();
//     // renderHeaderLibrary();
//     // refs.gallery.textContent = 'Це сторінка "Бібліотека"';
//     await fetchMoviesByPageAndRender(page);
//   } else {
//     clearPage();
//     window.removeEventListener('scroll', smoothScrolling);
//     refs.content.textContent = 'Сторінка не знайдена';
//   }
// }

// _____________fetch and render FUNCTIONS_____________

// export async function fetchMoviesAndRender() {
//   try {
//     await FetchApiMovies.fetchMovies().then(movies => {
//       console.log(movies);
//       renderGallary(movies);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function fetchMoviesByQueryAndRender(query, page) {
//   try {
//     await FetchApiMovies.fetchMoviesByQuery(query, page).then(movies => {
//       // console.log(movies);
//       renderGallary(movies);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function fetchMovieDetailsByIdAndRender(MovieId) {
//   try {
//     await FetchApiMovies.fetchMovieDetailsById(MovieId).then(movie => {
//       renderModalMovieDetails(movie);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function fetchMoviesByPageAndRender(page) {
//   try {
//     await FetchApiMovies.fetchMoviesByPage(page).then(movies => {
//       // renderGallaryCard(movies);
//       renderGallary(movies);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// ________________event FUNC_______________________

// async function onFormSubmit(event) {
//   event.preventDefault();

//   clearPage();
//   FetchApiMovies.resetPage();

//   // showButtonLoad();
//   console.log(event.currentTarget.elements);
//   FetchApiMovies.query = event.currentTarget.elements.searchQuery.value.trim();
//   query = FetchApiMovies.query;

//   console.log('BEFORE', FetchApiMovies);

//   if (FetchApiMovies.query === ``) {
//     return;
//   }

//   // console.log('BEFORE scroll', FetchApiMovies);

//   await fetchMoviesByQueryAndRender(query, page);
// }

// async function onButtonLoadMoreClick(event) {
//   event.preventDefault();
//   console.log('BEFORE FETCH', FetchApiMovies);
//   FetchApiMovies.incrementPage();
//   page = FetchApiMovies.page;

//   if (query === '') {
//     await fetchMoviesByPageAndRender(page);
//     FetchApiMovies.incrementPage();
//   }

//   query = FetchApiMovies.query;

//   await fetchMoviesByQueryAndRender(query, page);

//   console.log('AFTER FETCH', FetchApiMovies);
// }

// async function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }
//   const CurrentActiveImg = document.querySelector(`.img--active`);

//   console.log(CurrentActiveImg);

//   if (CurrentActiveImg) {
//     event.target.classList.remove(`.img--active`);
//   }

//   const nextImgActive = event.target;
//   nextImgActive.classList.add(`.img--active`);
//   console.log(event.target);

//   ImgActive = nextImgActive.getAttribute(`src`).slice(31);
//   console.log(ImgActive);

//   const MovieId = await FetchApiMovies.fetchMovies().then(movies => {
//     console.log(movies);
//     const movieActive = movies.filter(movie => movie.poster_path === ImgActive);
//     console.log(movieActive);

//     const movieId = movieActive[0].id;
//     console.log(movieId);
//     return movieId;
//   });

//   await fetchMovieDetailsByIdAndRender(MovieId);
//   refs.modal.classList.add(`open`);
// }

// async function smoothScrolling() {
//   const documentRect = refs.gallery.getBoundingClientRect();

//   if (documentRect.bottom < document.documentElement.clientHeight + 200) {
//     await unlimitedScroll();
//   }
// }

// ___________FUNCTIONS_______________

// async function unlimitedScroll() {
//   FetchApiMovies.incrementPage();
//   query = FetchApiMovies.query;
//   page = FetchApiMovies.page;

//   if (query === '') {
//     console.log('befor new FETCH', FetchApiMovies);
//     await fetchMoviesByPageAndRender(page);
//   }

//   console.log('before new FETCH', FetchApiMovies);
//   await fetchMoviesByQueryAndRender(query, page);
// }

// function clearGallery() {
//   refs.gallery.innerHTML = '';
// }

// async function pagination(event) {
//   event.preventDefault();

//   page += 1;
//   try {
//     await fetchMoviesByPage(page).then(res => {
//       const movies = res.results;
//       Notiflix.Notify.success(`Congratulation! We find 20 results for You!.`);
//       renderGallary(movies);

//       const limit = res.total_results;

//       if (page >= limit) {
//         Notiflix.Notify.info(
//           `We're sorry, but you've reached the end of search results.`
//         );
//         hideButtonLoad();
//       }
//     });
//   } catch (error) {
//     console.log(`Error`);
//   }
// }

// async function smoothScrolling() {
//   const documentRect = refs.gallery.getBoundingClientRect();

//   if (documentRect.bottom < document.documentElement.clientHeight + 200) {
//     console.log(FetchApiMovies);
//     await unlimitedScroll();
//   }
// }

// async function unlimitedScroll() {
//   FetchApiMovies.incrementPage();
//   query = FetchApiMovies.query;
//   page = FetchApiMovies.page;

//   if (query === '') {
//     await fetchMoviesByPageAndRender(page);
//     console.log('AFTER FETCH', FetchApiMovies);
//   }

//   await fetchMoviesByQueryAndRender(query, page);
//   console.log('AFTER FETCH', FetchApiMovies);
// }

// function showButtonLoad() {
//   refs.buttonLoadMore.classList.remove(`not-visible`);
// }

// function hideButtonLoad() {
//   refs.buttonLoadMore.classList.add(`not-visible`);
// }

// _________________________________________________________________________
// try {
//   // if (page >= 500) {
//   //   Notiflix.Notify.info(
//   //     `We're sorry, but you've reached the end of search results.`
//   //   );
//   //   hideButtonLoad();
//   // }
//   //  await FetchApiMovies.fetchMoviesByPage(page).then(res => {
//   // const movies = res.results;
//   // Notiflix.Notify.success(`Congratulation! We find 20 results for You!.`);
//   // renderGallary(movies);
//   // const limit = res.total_results;
//   // if (page >= limit) {
//   //   Notiflix.Notify.info(
//   //     `We're sorry, but you've reached the end of search results.`
//   //   );
//   //   hideButtonLoad();
//   // }
//   // });
// } catch (error) {
//   console.log(`Error`);
// }
// ___________________________________________________________________
// const form = event.currentTarget;
// const searchQuery = form.elements.searchQuery.value;
// console.log(searchQuery);

// query = document.getElementById('search-input').value.trim();
// ___________________________________________________________________
// function renderGallary(movies) {
//   const markup = movies
//     .map(({ poster_path, original_title }) => {
//       return poster_path
//         ? `<div class="galery__card">
//         <a
//           class="gallery__link"
//           href="https://image.tmdb.org/t/p/w500${poster_path}"
//         >
//           <img
//             class="details__img"
//             src="https://image.tmdb.org/t/p/w500${poster_path}"
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`
//         : `<div class="galery__card">
//         <a
//           class="gallery__link modal_open"
//           href="../src/images/default_image_large.jpg"
//         >
//           <img
//             class="details__img"
//             src="../src/images/default_image_large.jpg"
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`;
//     })
//     .join(``);
//   refs.gallery.insertAdjacentHTML(`beforeend`, markup);
// }

// function renderModalMovieDetails({ poster_path, original_title }) {
//   const movieCardMarkup = `
//     <div class="modal_body">
//     <div class="modal_content">
//   <a href="" class="modal_close">X</a>
//   <div class="movie_card">

//         <img
//           src="https://image.tmdb.org/t/p/w500${poster_path}"
//           alt=${original_title}
//           class="image"
//         />
//         <div class="movie_descr">
//           <p class="movie_title">${original_title}</p>
//           <table class="movie_info">
//             <tr class="movie_info_item">
//               <td>11</td>
//               <td>12</td>
//             </tr>
//             <tr class="movie_info_item">
//               <td>21</td>
//               <td>22</td>
//             </tr>
//             <tr class="movie_info_item">
//               <td>31</td>
//               <td>32</td>
//             </tr>
//             <tr class="movie_info_item">
//               <td>41</td>
//               <td>42</td>
//             </tr>
//           </table>
//           <p>About</p>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
//             nostrum inventore sint, consectetur i ncidunt rerum, adipisci
//             suscipit fugit at similique sequi explicabo tempora provident harum
//             eaque dolorem dignissimos, praesentium architecto!
//           </p>
//           <button type="submit" class="button">Add to watched</button>
//           <button type="submit" class="button">Add to queue</button>
//         </div>
//         </div>
//         </div>
//       </div>`;
//   refs.modal.insertAdjacentHTML(`beforeend`, movieCardMarkup);
//   console.log('повертаю Муві');
// }

// ______________________________________________________________

// const refs = {
//   form: document.querySelector(`.form`),
//   button: document.querySelector(`.search-button`),
//   gallery: document.querySelector(`.gallery`),
//   buttonLoadMore: document.querySelector(`.load-more`),
//   modal: document.querySelector(`.modal`),
//   buttonClose: document.querySelector(`.modal_close`),
//   body: document.querySelector(`body`),
// };

// import {
//   fetchMovies,
//   fetchMoviesByQuery,
//   fetchMovieDetailsById,
//   fetchMoviesByPage,
// } from './js/apiService';

// const limit = getImagesApiService.totalHits;
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
// ____________________________________________________________

// function onButtonModalCloseClick(event) {
//   event.preventDefault();
//   refs.modal.classList.remove('open');
// }

// _____________________________________________________________

// import axios from 'axios';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '6de1479941bef67a0c224787b78603f1';

// const lightbox = new SimpleLightbox(`.gallery a`, {
//   captionsData: `alt`,
//   captionPosition: `bottom`,
//   captionDelay: `250 ms`,
// });
// _____________________________________________________________

// function bodyLock() {

// }

// lightbox.refresh();

// async function fetchMovies() {
//   // return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
//   //   .then(res => {
//   //     return res.json();
//   //   })
//   //   .then(res => {
//   //     const movies = res.results;
//   //     renderGallary(movies);
//   //   })
//   //   .catch(error => {
//   //     console.log(error);
//   //   });

//   // ______________________async await_____________________

//   const options = {
//     method: 'GET',
//     headers: { accept: 'application/json' },
//   };

//   const response = await fetch(
//     `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
//     options
//   );

//   const res = await response.json();

//   const movies = await res.results;

//   console.log(movies);

//   return movies;
// }

// async function fetchMoviesByQuery(query) {
//   const options = {
//     method: 'GET',
//     headers: { accept: 'application/json' },
//   };

//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
//     options
//   );

//   const res = await response.json();

//   const movie = await res.results;

//   console.log(movie);

//   return movie;
// }

// async function fetchMoviesByQuery(query) {

//   return await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
//   )
//     .then(res => res.json())
//     .then(res => {
//       const movie = res.results;
//       if (query === ``) {
//         return;
//       }

//       if (movie.length === 0) {
//         return;
//       }

//       const markup = movie.map(({ poster_path, original_title }) => {
//         return poster_path
//           ? `<div class="gallery__card">
//         <a
//           class="gallery__link"
//           href=https://image.tmdb.org/t/p/w500/${poster_path}
//         >
//           <img
//             class="details__img"
//             src=https://image.tmdb.org/t/p/w500/${poster_path}
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`
//           : `<div class="gallery__card">
//         <a
//           class="gallery__link"
//           href="../src/images/default_image_large.jpg"
//         >
//           <img
//             class="details__img"
//             src="../src/images/default_image_large.jpg"
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`;
//       });
//       refs.gallery.insertAdjacentHTML(`beforeend`, markup);
//       lightbox.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// async function fetchMovieDetailsById(movieId) {
//   return await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&movie/${movieId}`
//   )
//     .then(res => res.json())
//     .then(res => {
//       const movieDetails = res.results;

//       const markup = movieDetails.map(({ poster_path, original_title }) => {
//         return poster_path
//           ? `<div class="galery__card">
//         <a
//           class="gallery__link"
//           href=https://image.tmdb.org/t/p/w500/${poster_path}
//         >
//           <img
//             class="details__img"
//             src=https://image.tmdb.org/t/p/w500/${poster_path}
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`
//           : `<div class="galery__card">
//         <a
//           class="gallery__link"
//           href="../src/images/default_image_large.jpg"
//         >
//           <img
//             class="details__img"
//             src="../src/images/default_image_large.jpg"
//           alt=${original_title}
//             width="300px"
//             height="450px"
//             loading="lazy"
//           />
//         </a>
//       </div>`;
//       });
//       refs.gallery.insertAdjacentHTML(`beforeend`, markup);
//       lightbox.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

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

// ______________________________________________________

// refs.gallery.addEventListener(`click`, onGalleryClick);

// let ImgActive = null;

// function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }

//   const CurrentActiveImg = document.querySelector(`.img--active`);
//   console.log(CurrentActiveImg);

//   if (CurrentActiveImg) {
//     event.target.classList.remove(`.img--active`);
//   }

//   const nextImgActive = event.target;
//   nextImgActive.classList.add(`.img--active`);
//   console.log(event.target);

//   ImgActive = nextImgActive.getAttribute(`src`);
//   console.log(ImgActive);
// }

// console.log(MovieId);

// await fetchMovies()
//   .then(movies => {
//     console.log(movies);
//     const movieActive = movies.filter(
//       movie => movie.poster_path === ImgActive
//     );
//     const movieId = movieActive[0].id;
//     console.log(movieId);
//     return movieId;
//   })
//   .then(movieId => {
//     fetchMovieDetailsByIdAndRender(movieId);
//   })
//   .catch(error => {
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log('Experiment completed');
//   });
