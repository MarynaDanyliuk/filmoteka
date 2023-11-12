import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { refs } from '../js/refs';
import { app } from './fb_config';

// refs.loginButton.addEventListener('click', loginEmailAndPassword);

console.log(refs.loginButton);

// refs.loginButton.addEventListener('click', onFormAuthSubmit);
const auth = getAuth(app);
const db = getFirestore(app);

console.log(auth);

export async function onFormAuthSubmit(event) {
  event.preventDefault();

  const email = refs.txtEmail.value;
  const password = refs.txtPassword.value;

  console.log(email, password);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  console.log(userCredential.user);

  // clearPage();
  // FetchApiMovies.resetPage();

  // FetchApiMovies.query = event.currentTarget.elements.searchQuery.value.trim();

  // if (FetchApiMovies.query === ``) {
  //   return;
  // }

  // page = FetchApiMovies.page;
  // query = FetchApiMovies.query;

  // await fetchMoviesByQueryAndRender(query, page);
}

// connectAuthEmulator(auth, 'http://localhost:9099');
// connectAuthEmulator(auth, 'http://127.0.0.1:9099');

const loginEmailAndPassword = async () => {
  // const email = refs.txtEmail.value;
  // const password = refs.txtPassword.value;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  console.log(userCredential.user);
};

// createUserWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('user logged in');
  } else {
    console.log('no user');
  }
});

async function getMovies(db) {
  const moviesCol = collection(db, 'movies');
  const movieSnapshot = await getDocs(moviesCol);
  const movieList = movieSnapshot.docs.map(doc => doc.data());
  return movieList;
}

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch(error => {
//     // An error happened.
//   });

// getMovies(db);

// createUserWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// const email = document.getElementById('login');
// const password = document.getElementById('password');

// createUserWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
