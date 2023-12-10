import { onAuthStateChanged } from 'firebase/auth';

import { homePage } from '../js/content-pages';

import { refs } from '../js/refs';
import { auth } from './fb_config';

// refs.butttonsLibrary.addEventListener('click', createLibraryCollection);

// export const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user !== null) {
//       // console.log(user);
//       console.log('user logged in');
//       refs.signOut.classList.remove('not-visible');
//       // The user object has basic properties such as display name, email, etc.
//       const displayName = user.displayName;
//       const email = user.email;
//       const photoURL = user.photoURL;
//       const emailVerified = user.emailVerified;
//       // The user's ID, unique to the Firebase project. Do NOT use
//       // this value to authenticate with your backend server, if
//       // you have one. Use User.getToken() instead.
//       const uid = user.uid;

//       console.log(uid);
//     } else {
//       homePage(user);
//       console.log('no user');
//     }
//   });
// };

// monitorAuthState();

// const addUserLibraryToFirestore = async user => {};

// async function createLibraryCollection(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== `BUTTON`) {
//     return;
//   }
//   key = event.target.getAttribute('id');

//   moviesWatched = getItemsLocalStorage(key) || [];
//   moviesQueue = getItemsLocalStorage(key) || [];

//   closeModal(event);

//   await FetchApiMovies.fetchMovieDetailsById(FetchApiMovies.movieId)
//     .then(data => {
//       // updateDB
//       moviesLibrary = getItemsLocalStorage('library') || [];
//       console.log(data);
//       moviesLibrary.push(data);

//       setItemsLocalStorage('library', moviesLibrary);
//       if (key === 'watched') {
//         moviesWatched.push(data);
//         setItemsLocalStorage(key, moviesWatched);
//       } else if (key === 'queue') {
//         moviesQueue.push(data);
//         setItemsLocalStorage(key, moviesQueue);
//       }
//     })
//     .catch(error => console.log(error.message))
//     .finally(() => {
//       alert('фільм додано в бібліотеку');
//     });
// }
