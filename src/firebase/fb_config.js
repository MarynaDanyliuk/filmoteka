// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfjG-RLGh4VqAL5XSxS9EG4IVK4R8XF-E',
  authDomain: 'filmoteka-23.firebaseapp.com',
  projectId: 'filmoteka-23',
  storageBucket: 'filmoteka-23.appspot.com',
  messagingSenderId: '1050534310211',
  appId: '1:1050534310211:web:687145a2426964cba8fff6',
  measurementId: 'G-0W38ZQRK92',

  // apiKey: 'AIzaSyAEFOjEPX5SWMvveOJzCm2s9qgmXntTPp4',
  // authDomain: 'filmoteka-2006.firebaseapp.com',
  // projectId: 'filmoteka-2006',
  // storageBucket: 'filmoteka-2006.appspot.com',
  // messagingSenderId: '109326040099',
  // appId: '1:109326040099:web:9311518b01962c54dec596',
  // measurementId: 'G-987HERX0LL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

// console.log('Hello, Firestore!');
