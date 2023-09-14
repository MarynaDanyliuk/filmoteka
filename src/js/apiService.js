import axios from 'axios';
const API_KEY = '6de1479941bef67a0c224787b78603f1';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default class fetchApiMovies {
  constructor() {
    this.page = 1;
    this.word = '';
  }

  async fetchMovies() {
    const response = await instance.get(
      `/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  }

  async fetchMovieDetailsById(MovieId) {
    const response = await instance.get(`movie/${MovieId}?api_key=${API_KEY}`);

    return response.data;
  }

  async fetchMoviesByQueryAndPage(query, page) {
    const response = await instance.get(
      `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return response.data.results;
  }

  async fetchMoviesByPage(page) {
    const response = await instance.get(
      `/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    return response.data.results;
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

  set query(newQuery) {
    return (this.word = newQuery);
  }
}

// ________________________async fetch FUNCTIONS__________________________

export async function fetchMovies() {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    options
  );

  const res = await response.json();

  const movies = await res.results;

  return movies;
}

export async function fetchMoviesByQuery(query) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  const res = await response.json();

  const movies = await res.results;

  return movies;
}

export async function fetchMovieDetailsById(movieId) {
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    options
  );

  const res = await response.json();

  return res;
}

export async function fetchMoviesByPage(page) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
    options
  );

  const res = await response.json();

  return res;
}

// ______________________ TRASH________________________________

// return await fetch(
//   `${BASE_URL}/search/movie?api_key=${API_KEY}&movie/${movieId}`
// )
//   .then(res => res.json())
//   .then(res => {
//     const movieDetails = res.results;

//     const markup = movieDetails.map(({ poster_path, original_title }) => {
//       return poster_path
//         ? `<div class="galery__card">
//       <a
//         class="gallery__link"
//         href=https://image.tmdb.org/t/p/w500/${poster_path}
//       >
//         <img
//           class="details__img"
//           src=https://image.tmdb.org/t/p/w500/${poster_path}
//         alt=${original_title}
//           width="300px"
//           height="450px"
//           loading="lazy"
//         />
//       </a>
//     </div>`
//         : `<div class="galery__card">
//       <a
//         class="gallery__link"
//         href="../src/images/default_image_large.jpg"
//       >
//         <img
//           class="details__img"
//           src="../src/images/default_image_large.jpg"
//         alt=${original_title}
//           width="300px"
//           height="450px"
//           loading="lazy"
//         />
//       </a>
//     </div>`;
//     });
//     refs.gallery.insertAdjacentHTML(`beforeend`, markup);
//     lightbox.refresh();
//   })
//   .catch(error => {
//     console.log(error);
//   });

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

// export default class GetImagesApiService {
//   constructor() {
//     this.word = ``;
//     this.page = 1;
//     this.per_page = 40;
//     this.totalHits = 500;
//   }

//   async fetchImages(word) {
//     // console.log(`До запроса наш объект`, this);
//     // const API_KEY = '31808257-b1d1bead71ab6681d9f118ecf';
//     // const BASE_URL = 'https://pixabay.com/api/';
//     // const response = await axios.get(
//     //   `` +
//     //     BASE_URL +
//     //     `?key=` +
//     //     API_KEY +
//     //     `&q=${this.word}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`
//     // );

//     // const images = response.data.hits;

//     // return images;
//     // __________________________

//     console.log(`До запроса наш объект`, this);
//     // const API_KEY = '6de1479941bef67a0c224787b78603f1';
//     // const BASE_URL = 'https://api.themoviedb.org/3';
//     const instance = axios.create({
//       baseURL: 'https://api.themoviedb.org/3',
//     });

//     const { results } = await instance.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1`
//     );
//     return results;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.word;
//   }

//   set query(newWord) {
//     return (this.word = newWord);
//   }

//   get totalPages() {
//     return this.totalPages;
//   }
// }

// return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
//   .then(res => {
//     return res.json();
//   })
//   .then(res => {
//     const movies = res.results;
//     renderGallary(movies);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// ______________________async await_____________________
