import {
  collection,
  getDocs,
  addDoc,
  // getDoc,
  doc,
  query,
  where,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

import { db } from './fb_config';

// import { refs } from '../js/refs';

import { MovieActiveId } from '../js/modal';

import fetchApiMovies from '../js/apiService';
const FetchApiMovies = new fetchApiMovies();

// import {
//   getItemsLocalStorage,
//   setItemsLocalStorage,
// } from '../js/localStorageService';

// let key = '';
// let moviesW = [];
// let moviesQ = [];

// import { renderGallary } from '../js/renderServies';

// refs.butttonsLibrary.addEventListener('click', createLibraryCollection);
// const key = 'watched';
// export const listWatched = getItemsLocalStorage(key) || [];
// export const listQueue = getItemsLocalStorage(key) || [];

export const usersRef = collection(db, 'users');

export const addUserToFirestore = async user => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  try {
    const querySnapshot = await getDocs(userQuery);

    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });

    if (querySnapshot.size > 0) {
      console.log('Пользователь с таким email уже существует');
    } else {
      const docRef = await addDoc(collection(db, 'users'), {
        userId: user.uid,
        email: user.email,
        watched: [],
        queue: [],
      });
      console.log('Document written with ID: ', docRef.id);
    }
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

export const updateMovieInFirestore = async (user, key) => {
  try {
    const userQuery = query(usersRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(userQuery);

    console.log(querySnapshot.docs[0].id);

    const refId = querySnapshot.docs[0].id;
    const ref = doc(db, 'users', refId);
    console.log(ref);

    const data = await FetchApiMovies.fetchMovieDetailsById(MovieActiveId);

    console.log(data);

    let fieldToUpdate;
    let valueToAdd;

    if (key === 'watched') {
      fieldToUpdate = 'watched';
      valueToAdd = data;
    } else if (key === 'queue') {
      fieldToUpdate = 'queue';
      valueToAdd = data;
    }

    if (fieldToUpdate && valueToAdd) {
      await updateDoc(ref, {
        [fieldToUpdate]: arrayUnion(valueToAdd),
      });
    }
    // const list = getItemsLocalStorage(key);
    // moviesWatched = getItemsLocalStorage(key) || [];
    // moviesQueue = getItemsLocalStorage(key) || [];
    // _______________________________________________________________________________
    // await FetchApiMovies.fetchMovieDetailsById(MovieActiveId).then(data => {
    //   // console.log(data);

    //   if (key === 'watched') {
    //     moviesW.push(data);
    //     updateDoc(ref, {
    //       watched: moviesW,
    //     });
    //   } else if (key === 'queue') {
    //     moviesQ.push(data);
    //     updateDoc(ref, {
    //       queue: moviesQ,
    //     });
    //   }
    // });
    // ____________________________________________________________
    // await updateDoc(ref, {
    //   watched: moviesW,
    //   queue: moviesQ,
    // });
    console.log('document updated');
  } catch (error) {
    console.log(error);
  }
};

// refs.buttonHeaderNav.addEventListener('click', updateMovieInFirestore);

// renderGallary(listWatched);
// renderGallary(listQueue);

// const getUserFromFirestore = async uid => {
//   try {
//     const user = await getDocs(collection(db, 'users'));
//     // Перевіряємо у консолі отримані дані
//     user.forEach(doc => console.log(`${doc.id} =>`, doc.data()));
//     // Повертаємо масив обʼєктів у довільній формі
//     return user.map(doc => ({ id: doc.id, data: doc.data() }));
//     // return user;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const getUserData = async user => {
//   try {
//     const userDocRef = doc(db, 'users', user.uid);
//     const userDocSnapshot = await getDoc(userDocRef);
//     // console.log(userDocRef);
//     if (userDocSnapshot.exists()) {
//       console.log(
//         `'User with userId ${user.uid} already exists in Firestore.'`
//       );
//     }
//     // const docData = userDocSnapshot.data();
//   } catch (error) {
//         console.log(error);
//     throw error;
//   }
// };

// const docSnap = await getDoc(usersRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   const docRef = await addDoc(collection(db, "users"), {
//   userId: user.uid,
//   email: user.email
// });
// console.log("Document written with ID: ", docRef.id);
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
// query.get().then((querySnapshot) => {
//   if (querySnapshot.size > 0) {
//     // Пользователь с таким email уже существует
//     console.log('Пользователь с таким email уже существует');
//   } else {
//     // Можно добавить нового пользователя в базу данных
//     usersCollection.add(newUser)
//   .then((docRef) => {
//     console.log('Документ успешно добавлен с идентификатором:', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Ошибка при добавлении документа:', error);
//   });
//     //     const newDoc = await addDoc(db, {
//     //     userId: user.uid,
//     //     email: user.email,
//     // })
//           console.log(`Your doc was created ${newDoc.path}`);
//     console.log('Добавление нового пользователя');
//     // Добавление пользователя...
//   }
// }).catch((error) => {
//   console.error('Ошибка при выполнении запроса:', error);
// });
// writtenDocRef();

// const userDocSnapshot = await getDoc(userDocRef);
// console.log(userDocRef);
// if (userDocSnapshot.exists()) {
//   console.log(`'User with userId ${user.uid} already exists in Firestore.'`);
// }

//   .then((querySnapshot) => {
//     if (querySnapshot.size > 0) {
//       // Пользователь с таким email уже существует
//       console.log('Пользователь с таким email уже существует');
//     } else {
//       const docRef = await addDoc(collection(db, "users"), {
//   userId: user.uid,
//   email: user.email
// });
// console.log("Document written with ID: ", docRef.id);
//     }
//   })

// const newDoc = await addDoc(db, {
//     userId: user.uid,
//     email: user.email,
// })
// console.log(`Your doc was created ${newDoc.path}`);
// const userDocRef = doc(db, 'users', user.uid);
// const userDocSnapshot = await getDoc(userDocRef);
// console.log(userDocSnapshot.id, user.uid);
// if (userDocSnapshot.id === user.uid) {
//   console.log('User with userId already exists in Firestore.');
// }
// _________________________________________________
// const docData = await addDoc(
//   collection(db, 'users'),
//   {
//     userId: user.uid,
//     email: user.email,
//   },
//   { merge: true }
// );
// console.log('Document written with ID: ', docData.id);

// userLibrary: getItemsLocalStorage('library') || [],
// userWatched: getItemsLocalStorage('watched') || [],
// userQueue: getItemsLocalStorage('queue') || [],

// console.log(db);

// const Users = doc(db, 'users');

// console.log(Users);

// const key = 'library';

//

// await getDoc(doc(db, loadDataFromLocalSt(KEY), list));
//  userId: null,
//   nickname: null,
//   email: null,

// if (userDocSnapshot.exists()) {
//   const docData = userDocSnapshot.data();

//   console.log(
//     `${JSON.stringify(docData)}`,
//     'User with userId already exists in Firestore.'
//   );
//   return;
// }

// async function getMoviesFromFirestore(db) {
//   const moviesCol = collection(db, 'movies');
//   const movie = await getDocs(moviesCol);
//   const movieList = movie.docs.map(doc => doc.data());
//   return movieList;
// }

// } else {

// }
// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach(doc => {
//   if (doc.data().userId === user.uid) {
//     console.log('User with userId already exists in Firestore.');
//     return;
//   }
//   console.log(`${doc.id} => ${user.uid}`);
// });
// const docData = await addDoc(
//   collection(db, 'users'),
//   {
//     userId: user.uid,
//     email: user.email,
//     // userLibrary: getItemsLocalStorage('library') || [],
//     // userWatched: getItemsLocalStorage('watched') || [],
//     // userQueue: getItemsLocalStorage('queue') || [],
//   },
//   { merge: true }
// );
// console.log('Document written with ID: ', docData.id);
// if (!querySnapshot.empty) {
//   console.log('ewew');
//   return;
// }
// console.log('userDocSnapshot:', userDocSnapshot);
// if (userDocSnapshot.exists()) {
//   console.log('User with userId already exists in Firestore.');
//   return;
// }
