import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
// import { db } from './config';
import { db } from './fb_config';

//  userId: null,
//   nickname: null,
//   email: null,

const addUserToFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      userId: 123456,
      email: 'mary@gmail.com',
      library: 'Barbie movie',
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

const getUserFromFirestore = async () => {
  try {
    const user = await getDocs(collection(db, 'users'));
    // Перевіряємо у консолі отримані дані
    user.forEach(doc => console.log(`${doc.id} =>`, doc.data()));
    // Повертаємо масив обʼєктів у довільній формі
    return user.map(doc => ({ id: doc.id, data: doc.data() }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const updateMovieInFirestore = async (collectionName, docId) => {
//   try {
//     const ref = doc(db, collectionName, docId);

//     await updateDoc(ref, {
//       userId: user.uid,
//     });
//     console.log('document updated');
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function getMoviesFromFirestore(db) {
//   const moviesCol = collection(db, 'movies');
//   const movie = await getDocs(moviesCol);
//   const movieList = movie.docs.map(doc => doc.data());
//   return movieList;
// }
