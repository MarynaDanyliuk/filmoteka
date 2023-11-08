// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEFOjEPX5SWMvveOJzCm2s9qgmXntTPp4',
  authDomain: 'filmoteka-2006.firebaseapp.com',
  projectId: 'filmoteka-2006',
  storageBucket: 'filmoteka-2006.appspot.com',
  messagingSenderId: '109326040099',
  appId: '1:109326040099:web:9311518b01962c54dec596',
  measurementId: 'G-987HERX0LL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
