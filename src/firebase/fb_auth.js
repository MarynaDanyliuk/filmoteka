import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from './fb_config';

const auth = getAuth(app);
const db = getFirestore(app);

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
