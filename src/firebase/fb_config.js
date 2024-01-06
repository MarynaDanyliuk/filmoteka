// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCfjG-RLGh4VqAL5XSxS9EG4IVK4R8XF-E',
  authDomain: 'filmoteka-23.firebaseapp.com',
  projectId: 'filmoteka-23',
  storageBucket: 'filmoteka-23.appspot.com',
  messagingSenderId: '1050534310211',
  appId: '1:1050534310211:web:687145a2426964cba8fff6',
  measurementId: 'G-0W38ZQRK92',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


// console.log('Hello, Firestore!');
