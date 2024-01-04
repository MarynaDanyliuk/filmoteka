import { collection, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { addUserToFirestore, updateMovieInFirestore } from './fb_cloudStore';

import { homePage, libraryPage } from '../js/content-pages';

import { renderGallary, clearPage, renderUser } from '../js/renderServies';
import { renderContent } from '../js/routing';

import { MovieActiveId } from '../js/modal';
import { refs } from '../js/refs';
import { auth, db } from './fb_config';

import fetchApiMovies from '../js/apiService';
const FetchApiMovies = new fetchApiMovies();

let key = 'watched';
let moviesWatched = [];
let moviesQueue = [];

const user = auth.currentUser;
const usersRef = collection(db, 'users');

refs.homeBtn.addEventListener('click', homePage);

refs.buttonHeaderNav.addEventListener(
  'click',
  onButtonsHeaderNavClickRenderLibrary
);

refs.logo.addEventListener('click', homePage);

refs.butttonsLibrary.addEventListener('click', createLibraryCollection);

export const monitorAuthState = user => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      console.log('user logged in', user);
      addUserToFirestore(user);
      //   renderUser(user);
      renderContent(key, user);
      refs.libraryBtn.addEventListener('click', event => {
        if (!user) {
          return;
        }
        key = 'watched';
        event.preventDefault();
        libraryPage(key, user);
      });
    } else {
      homePage();
      console.log('no user');
    }
  });
};

const getLibrary = async (key, user) => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  try {
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size > 0) {
      const userData = querySnapshot.docs[0].data();

      moviesWatched.push(userData.watched);
      moviesQueue.push(userData.queue);

      if (key === 'watched') {
        return userData.watched;
      } else if (key === 'queue') {
        return userData.queue;
      }
    } else {
      console.log('No matching documents.');
      return [];
    }
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

export async function renderLibraryCollection(key, user) {
  getLibrary(key, user).then(list => {
    renderGallary(list);
  });
}

monitorAuthState(user);

export async function onButtonsHeaderNavClickRenderLibrary(event) {
  clearPage();
  const user = auth.currentUser;
  key = event.target.getAttribute('id');

  if (key === 'watched') {
    refs.buttonWatched.classList.add('active_btn');
    refs.buttonQueue.classList.remove('active_btn');
    renderLibraryCollection(key, user);
  } else if (key === 'queue') {
    refs.buttonQueue.classList.add('active_btn');
    refs.buttonWatched.classList.remove('active_btn');
    renderLibraryCollection(key, user);
  }
}

export async function createLibraryCollection(event) {
  event.preventDefault();
  const user = auth.currentUser;
  console.log(MovieActiveId);

  key = event.target.getAttribute('id');

  console.log('key:', key);
  if (event.target.nodeName !== `BUTTON`) {
    return;
  }

  await getLibrary(key, user);

  await FetchApiMovies.fetchMovieDetailsById(MovieActiveId)
    .then(data => {
      console.log(data);
      updateMovieInFirestore(user, key);
      if (key === 'watched') {
        moviesWatched.push(data);
        updateMovieInFirestore(user);
      } else if (key === 'queue') {
        moviesQueue.push(data);
        updateMovieInFirestore(user);
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      alert('фільм додано в бібліотеку');
    });
}

//   const displayName = user.displayName;
//   const email = user.email;
//   const token = user.accessToken;
//   const emailVerified = user.emailVerified;
//   const uid = user.uid;
// The user's ID, unique to the Firebase project. Do NOT use
// this value to authenticate with your backend server, if
// you have one. Use User.getToken() instead.

// _______________________________________________________________

//   moviesWatched = moviesWatched.push(userData.watched) || [];
//   moviesQueue = userData.queue || [];

//   moviesWatched = moviesWatched.concat(moviesWatchedPrev);
//     moviesQueue = moviesQueue.concat(moviesQueuePrev);

// moviesWatched.push({ moviesWatchedPrev });
// moviesQueue.push({ moviesQueuePrev });
//   console.log('watched:', moviesWatched);
//   console.log('queue:', moviesQueue);
// ___________________________________________________________________

// renderContent();

// async function renderContent() {
//   const route = window.location.hash.substring(1);
//   console.log(route);
//   if (route === '/' || route === '') {
//     await homePage();
//   } else if (route === '/library') {
//     await libraryPage();
//   } else {
//     notFoundPage();
//   }
// }
// ____________________________________________________

//   const list = await getLibrary(key, user);
//   console.log(moviesWatched);
//   refs.buttonWatched.classList.add('active_btn');
//   renderGallary(list);
//   const list = await getLibrary(key, user);
//   if (key === 'watched') {
//     renderGallary(moviesWatched);
//   } else if (key === 'queue') {
//     renderGallary(moviesQueue);
//   }
// ____________________________________________________

//   const userQuery = query(usersRef, where('userId', '==', user.uid));
//   const querySnapshot = await getDocs(userQuery);

//   const list = getLibrary(key, user);

//   renderGallary(list);
//   console.log(querySnapshot.data());
//   querySnapshot.forEach(doc => {
//     console.log(doc.id, ' => ', doc.data());
//   });

//   moviesWatched = getItemsLocalStorage(key) || [];
//   moviesQueue = getItemsLocalStorage(key) || [];

// renderLibraryCollection(key, user);

// __________________________________________-
//   if (key === 'watched') {
//     renderGallary(moviesWatched);
//   } else if (key === 'queue') {
//     renderGallary(moviesQueue);
//   }
//   const list = await getLibrary(key, user);
//   console.log(user);
//   if (list) {
//     renderGallary(list);
//   }
// _______________________________________________________

//   const watchedCollection = (await getLibrary(key, user)) || [];
//   console.log('Watched Collection:', watchedCollection);

//   const queueCollection = (await getLibrary(key, user)) || [];
//   console.log('Queue Collection:', queueCollection);
// _________________________________________________
//   if (key === 'watched') {
//     refs.buttonWatched.classList.add('active_btn');
//     refs.buttonQueue.classList.remove('active_btn');
//     console.log(moviesWatched);
//     renderGallary(moviesWatched);
//   } else if (key === 'queue') {
//     refs.buttonQueue.classList.add('active_btn');
//     refs.buttonWatched.classList.remove('active_btn');
//     renderGallary(moviesQueue);
//   }
// _________________________________________________
//   const libraryCollection = getItemsLocalStorage(key);

//   if (libraryCollection) {
//     return renderGallary(libraryCollection);
//   }
// ____________________________________________________________

// querySnapshot.forEach(doc => {
//   console.log(doc.id, ' => ', doc.data());
// });
// moviesWatchedPrev = querySnapshot.docs[0].data().watched || [];
// moviesQueuePrev = querySnapshot.docs[0].data().queue || [];

// moviesWatched.push(moviesWatchedPrev);
// moviesQueue.push(moviesQueuePrev);

// console.log('watched:', moviesWatched);
// console.log('queue:', moviesQueue);

// if (key === 'watched') {
//   return moviesWatched;
// } else if (key === 'queue') {
//   return moviesQueue;
// }
// console.log(querySnapshot.docs[0].data().watched);
// ____________________________________________________________

//   const user = auth.currentUser;
//   const user = auth.currentUser;

//   const userQuery = query(usersRef, where('userId', '==', user.uid));
//   const querySnapshot = await getDocs(userQuery);
//   console.log(querySnapshot.docs[0]);
//   const userId = user.uid;
//   const userQuery = query(usersRef, where('userId', '==', user.uid));
//   const querySnapshot = await getDocs(userQuery);

//   console.log(querySnapshot);

//   console.log(querySnapshot.docs[0].id);

// const watchedCollection = await getLibraryCollection('watched', user);
// console.log('Watched Collection:', watchedCollection);

// const queueCollection = await getLibraryCollection('queue', user);
// console.log('Queue Collection:', queueCollection);
// ____________________________________________________________________________
// const user = auth.currentUser;

// async function getLibraryCollection(key, user) {
//   const userQuery = query(usersRef, where('userId', '==', user.uid));
//   try {
//     const querySnapshot = await getDocs(userQuery);

//     querySnapshot.forEach(doc => {
//       console.log(doc.id, ' => ', doc.data());
//     });
//     moviesWatchedPrev = querySnapshot.docs[0].data().watched || [];
//     moviesQueuePrev = querySnapshot.docs[0].data().queue || [];

//     moviesWatched.push(moviesWatchedPrev);
//     moviesQueue.push(moviesQueuePrev);

//     console.log('watched:', moviesWatched);
//     console.log('queue:', moviesQueue);

//     if (key === 'watched') {
//       return moviesWatched;
//     } else if (key === 'queue') {
//       return moviesQueue;
//     }
//     // console.log(querySnapshot.docs[0].data().watched);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//     throw e;
//   }
// }

// const userQuery = query(usersRef, where('userId', '==', user.uid));
// const querySnapshot = await getDocs(userQuery);

// console.log(querySnapshot.docs[0].id);

// const refId = querySnapshot.docs[0].id;
// const ref = doc(db, collectionName, refId);
// console.log(ref);
// // const list = getItemsLocalStorage(key);

// await updateDoc(ref, {
//   watched: listWatched,
//   queue: listQueue,
// });

// refs.butttonsLibrary.addEventListener('click', createLibraryCollection);

// export const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user !== null) {
//       // console.log(user);
//       console.log('user logged in');
//       refs.signOut.classList.remove('not-visible');`
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
