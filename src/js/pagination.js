import { refs } from './refs';

export function showButtonLoad() {
  refs.buttonLoadMore.classList.remove(`not-visible`);
}

export function hideButtonLoad() {
  refs.buttonLoadMore.classList.add(`not-visible`);
}

//______________________pagination______________________________
