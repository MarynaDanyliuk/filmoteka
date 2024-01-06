import { refs } from './refs';
import fetchApiMovies from './apiService';

const FetchApiMovies = new fetchApiMovies();

export let MovieActiveId = null;
let ModalActive = '';

refs.gallery.addEventListener(`click`, openModal);

refs.libraryBtn.addEventListener(`click`, openModalAuth);
refs.registerLink.addEventListener('click', openModalAuth);
refs.loginLink.addEventListener('click', openModalAuth);

import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';

import { auth } from '../firebase/fb_config';

export async function openModal(event) {
  event.preventDefault();
  const user = auth.currentUser;
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  if (!user) {
    refs.modalLogin.classList.add(`open`);
  } else if (user) {
    MovieActiveId = event.target.getAttribute(`id`);
    FetchApiMovies.movieId = MovieActiveId;
    console.log(MovieActiveId);
    await fetchMovieDetailsByIdAndRender(MovieActiveId);
    refs.modal.classList.add(`open`);
    refs.body.classList.add(`lock`);
    return MovieActiveId;
  }
  return MovieActiveId;
}

const modalCloseButtons = refs.buttonClose;
if (modalCloseButtons) {
  for (let i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', closeModal);
  }
}

const modalBackdrops = refs.modalBackdrop;
if (modalBackdrops) {
  for (let i = 0; i < modalBackdrops.length; i++) {
    modalBackdrops[i].addEventListener('click', closeModal);
  }
}

export function closeModal(event) {
  refs.modal.classList.remove(`open`);
  if (event.target.nodeName === `A`) {
    event.target.closest('.modal').classList.remove('open');
  }

  refs.body.classList.remove(`lock`);
  clearModal();
  event.preventDefault();
}

function clearModal() {
  refs.movieImage.innerHTML = '';
  refs.movieDescr.innerHTML = '';
}

// _________________Modal Auth___________________

function openModalAuth(event) {
  event.preventDefault();

  ModalActive = event.target.getAttribute('id');
  const user = auth.currentUser;
  if (ModalActive === 'library_btn' && user) {
    window.location.assign('#/library');
    refs.modalRegister.classList.remove(`open`);
    return;
  }
  if (ModalActive === 'library_btn' && !user) {
    refs.modalLogin.classList.add(`open`);
  } else {
    refs.modalRegister.classList.toggle(`open`);
    refs.modalLogin.classList.toggle(`open`);
  }
}
