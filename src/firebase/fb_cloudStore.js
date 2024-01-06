import {
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  where,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

import { db } from './fb_config';

import { MovieActiveId } from '../js/modal';

import fetchApiMovies from '../js/apiService';
const FetchApiMovies = new fetchApiMovies();

export const usersRef = collection(db, 'users');

export const addUserToFirestore = async user => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  try {
    const querySnapshot = await getDocs(userQuery);

    // querySnapshot.forEach(doc => {
    //   console.log(doc.id, ' => ', doc.data());
    // });

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

    console.log('document updated');
  } catch (error) {
    console.log(error);
  }
};

