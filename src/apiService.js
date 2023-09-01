import axios from 'axios';

import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: `250 ms`,
});

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGUxNDc5OTQxYmVmNjdhMGMyMjQ3ODdiNzg2MDNmMSIsInN1YiI6IjYzOTg4NjZjMmNlZmMyMDBkMTc0NGRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49g1rE2Yz2JQWV_AW_7LEMS7DuNEKWZ0DF0f_jQ-bYE',
//   },
// };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export default class GetImagesApiService {
  constructor() {
    this.word = ``;
    this.page = 1;
    this.per_page = 40;
    this.totalHits = 500;
  }

  async fetchImages(word) {
    // console.log(`До запроса наш объект`, this);
    // const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
    // const BASE_URL = 'https://pixabay.com/api/';
    // const response = await axios.get(
    //   `` +
    //     BASE_URL +
    //     `?key=` +
    //     API_KEY +
    //     `&q=${this.word}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`
    // );

    // const images = response.data.hits;

    // return images;
    // __________________________

    console.log(`До запроса наш объект`, this);
    // const API_KEY = '6de1479941bef67a0c224787b78603f1';
    // const BASE_URL = 'https://api.themoviedb.org/3';
    const instance = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
    });

    const { results } = await instance.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1`
    );
    return results;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.word;
  }

  set query(newWord) {
    return (this.word = newWord);
  }

  get totalPages() {
    return this.totalPages;
  }
}
