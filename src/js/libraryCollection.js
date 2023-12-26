import { getItemsLocalStorage } from './localStorageService';
import { refs } from './refs';

import { renderGallary } from './renderServies';

// export const getLibrary = async (key, user) => {
//   const userQuery = query(usersRef, where('userId', '==', user.uid));
//   try {
//     const querySnapshot = await getDocs(userQuery);

//     if (querySnapshot.size > 0) {
//       const userData = querySnapshot.docs[0].data();

//       moviesWatched.push(userData.watched);
//       moviesQueue.push(userData.queue);

//       if (key === 'watched') {
//         return userData.watched;
//       } else if (key === 'queue') {
//         return userData.queue;
//       }
//     } else {
//       console.log('No matching documents.');
//       return [];
//     }
//   } catch (e) {
//     console.error('Error adding document: ', e);
//     throw e;
//   }
// };

// export async function renderLibraryCollection(key, user) {
//   getLibrary(key, user).then(list => {
//     renderGallary(list);
//   });
// }

// export async function createLibraryCollection(event) {
//   event.preventDefault();
//   const user = auth.currentUser;
//   console.log(MovieActiveId);

//   key = event.target.getAttribute('id');

//   console.log('key:', key);
//   if (event.target.nodeName !== `BUTTON`) {
//     return;
//   }

//   await getLibrary(key, user);

//   await FetchApiMovies.fetchMovieDetailsById(MovieActiveId)
//     .then(data => {
//       console.log(data);
//       updateMovieInFirestore(user, key);
//       if (key === 'watched') {
//         moviesWatched.push(data);
//         updateMovieInFirestore(user);
//       } else if (key === 'queue') {
//         moviesQueue.push(data);
//         updateMovieInFirestore(user);
//       }
//     })
//     .catch(error => console.log(error.message))
//     .finally(() => {
//       alert('фільм додано в бібліотеку');
//     });
// }

// ___________________________________________________

// export function renderLibraryCollection(key) {
//   if (key === 'watched') {
//     refs.buttonWatched.classList.add('active_btn');
//     refs.buttonQueue.classList.remove('active_btn');
//   } else if (key === 'queue') {
//     refs.buttonQueue.classList.add('active_btn');
//     refs.buttonWatched.classList.remove('active_btn');
//   }
//   const libraryCollection = getItemsLocalStorage(key);

//   if (libraryCollection) {
//     return renderGallary(libraryCollection);
//   }
// }
