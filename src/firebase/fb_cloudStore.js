import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from 'firebase/firestore';

import { db } from './fb_config';

import fetchApiMovies from '../js/apiService';

const FetchApiMovies = new fetchApiMovies();

// _____________firestore____________
const usersRef = collection(db, 'users');

export const addUserToFirestore = async user => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  try {
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size > 0) {
      console.log('Пользователь с таким email уже существует');
    } else {
      const docRef = await addDoc(usersRef, {
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

export const readUserCollections = async (user, key) => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  const querySnapshot = await getDocs(userQuery);

  // querySnapshot.forEach(doc => {
  //   console.log(key, ' => ', doc.data()[key]);
  // });
};

export const updateMovieInFirestore = async (user, key, data) => {
  try {
    const userQuery = query(usersRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(userQuery);

    const refId = querySnapshot.docs[0].id;
    const ref = doc(db, 'users', refId);

    const valueToAdd = data;

    if (key && valueToAdd) {
      const existingMovies = querySnapshot.docs[0].data()[key];

      if (!existingMovies.some(movie => movie.id === data.id)) {
        await updateDoc(ref, {
          [key]: arrayUnion(valueToAdd),
        });
        alert('Film added to library! Document updated');
      } else {
        alert('Film already in the library');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// ___________________Delete from firestore___________________________

export const deleteMovieInFirestore = async (user, key, movieId) => {
  try {
    const userQuery = query(usersRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      console.log('User not found.');
      return;
    }

    const refId = querySnapshot.docs[0].id;
    const ref = doc(db, 'users', refId);

    const userData = (await getDoc(ref)).data();

    const updatedUserData = {
      ...userData,
      [key]: userData[key].filter(movie => movie.id != movieId),
    };
    await setDoc(ref, updatedUserData);

    console.log(updatedUserData[key]);

    // _______________________delete directly from firestore___________
    const subcollectionDocRef = doc(collection(ref, key), movieId);
    await deleteDoc(subcollectionDocRef);
    const deleteResult = await deleteDoc(subcollectionDocRef);
    console.log('Document deleted:', deleteResult);
    const docSnapshot = await getDoc(subcollectionDocRef);
    console.log(docSnapshot);
    if (!docSnapshot.exists()) {
      console.log('Document successfully deleted.');
    } else {
      console.error('Failed to delete document:', docSnapshot.data());
    }

    // console.log((await getDoc(ref)).data());
    alert('Film removed from library! Document updated');
  } catch (error) {
    console.log(error);
  }
};
