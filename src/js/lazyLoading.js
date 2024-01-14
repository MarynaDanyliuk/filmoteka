import { refs } from './refs';

const lazyImages = document.querySelectorAll('.movie_img');
const windowHeight = document.documentElement.clientHeight;
const documentRect = refs.gallery.getBoundingClientRect();

const arrayLazyImages = Array.from(lazyImages);

let lazyImagesPositions = [];

if (lazyImagesPositions.length > 0) {
  lazyImagesPositions.forEach(img => {
    if (img.dataset.src) {
      lazyImagesPositions.push(
        img.getBoundingClientRect().top + window.pageYOffset
      );
    }
  });
}
