import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  // connectAuthEmulator,
  // onAuthStateChanged,
  // updateProfile,
  // deleteUser,
} from 'firebase/auth';

import { refs } from '../js/refs';
import { auth } from './fb_config';

refs.loginButton.addEventListener('click', loginEmailAndPassword);
refs.registerButton.addEventListener('click', registerEmailAndPassword);
refs.signOut.addEventListener('click', signOutEvent);

const formsAuth = refs.formsAuth || [];

async function loginEmailAndPassword() {
  try {
    const email = refs.txtEmail.value;
    const password = refs.txtPassword.value;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // console.log(userCredential.user);
    refs.signOut.classList.remove('not-visible');
    clearForm();
  } catch (error) {
    console.log(error.message);
  }
}

async function registerEmailAndPassword() {
  try {
    const email = refs.regEmail.value;
    const password = refs.regPassword.value;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential.user);
    refs.signOut.classList.remove('not-visible');
    clearForm();
  } catch (error) {
    console.log(error.message);
  }
}

async function signOutEvent(event) {
  try {
    event.preventDefault();
    window.location.assign('#/');
    await signOut(auth);
    refs.signOut.classList.add('not-visible');
    console.log('user is successfully logout');
  } catch (error) {
    console.log(error.message);
  }
}

// export const monitorAuthState = async user => {
//   onAuthStateChanged(auth, user => {
//     if (user !== null) {
//       console.log('user logged in', user);
//       refs.signOut.classList.remove('not-visible');
//       // The user object has basic properties such as display name, email, etc.
//       const displayName = user.displayName;
//       const email = user.email;
//       const token = user.accessToken;
//       // const photoURL = user.photoURL;
//       const emailVerified = user.emailVerified;
//       // The user's ID, unique to the Firebase project. Do NOT use
//       // this value to authenticate with your backend server, if
//       // you have one. Use User.getToken() instead.
//       const uid = user.uid;
//       const collectionName = 'users';
//       // const list = getItemsLocalStorage(key);
//       // const list = ['1', '2', '3'];
//       addUserToFirestore(user);
//       // updateMovieInFirestore(collectionName, user, key);
//     } else {
//       homePage(user);
//       console.log('no user');
//     }
//   });
// };

// monitorAuthState(user);

function clearForm() {
  for (let i = 0; i < formsAuth.length; i++) {
    const formAuth = formsAuth[i];

    for (let i = 0; i < formAuth.elements.length; i++) {
      if (formAuth.elements[i].type === 'text') {
        formAuth.elements[i].value = '';
      }
    }
  }
}

// const updateUserProfile = async update => {
//   // const user = auth.currentUser;
//   // якщо такий користувач знайдений
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };

// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log(user);
//     console.log('user logged in');
//     libraryPage();
//     // refs.libraryBtn.removeEventListener('click', openModalAuth);
//     // The user object has basic properties such as display name, email, etc.
//     const displayName = user.displayName;
//     const email = user.email;
//     const photoURL = user.photoURL;
//     const emailVerified = user.emailVerified;

//     // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//     const uid = user.uid;
//   } else {
//     // refs.modalLogin.addEventListener('click', openModalAuth);
//     homePage();
//     console.log('no user');
//   }
// });

// connectAuthEmulator(auth, 'http://localhost:9099');
// connectAuthEmulator(auth, 'http://127.0.0.1:9099');

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

// const deleteUser = async user => {
//   if (user) {
//     // оновлюємо його профайл
//     try {
//       await deleteUser(user);
//     } catch (error) {
//       throw error;
//     }
//   }
// };

// const signOut = async auth => {
//   try {
//     await signOut(user);
//   } catch (error) {
//     throw error;
//   }
// };

// deleteUser(user)
//   .then(() => {
//     // User deleted.
//   })
//   .catch(error => {
//     // An error ocurred
//     throw error;
//   });

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch(error => {
//     // An error happened.
//     throw error;
//   });

// function closeModalAuth(event) {
//   event.preventDefault();
//   refs.modalLogin.classList.remove('.open');
// }

// const login = async event => {
//   try {
//     const email = refs.txtEmail.value;
//     const password = refs.txtPassword.value;
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log(userCredential.user);
//     clearForm();
//     closeModal(event);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// refs.loginButton.addEventListener('click', login);

// const email = refs.txtEmail.value;
// const password = refs.txtPassword.value;
// const userCredential = await signInWithEmailAndPassword(
//   auth,
//   email,
//   password
// );
// console.log(userCredential.user);
// clearForm();
// console.log(refs.modalLogin.classList.add('.hidden'));
// refs.modalLogin.classList.add('.hidden');

// const formElements = document.querySelectorAll('form_auth').elements;
// const formsAuth = refs.formsAuth;
// for (let i = 0; i < formsAuth.length; i++) {
//   // console.log(formsAuth[i].elements);
//   // const l = formsAuth[i].elements.length;
//   email.value = '';
//   password.value = '';
//   // for (let i = 0; i < l; i++) {
//   //   if (formsAuth[i].elements) {
//   //     // formsAuth[i].elements.value = '';
//   //     console.log('rere');
//   //   }
//   // }
// }

// Пройтися по всіх елементах і очистити їх значення
// for (let i = 0; i < formsAuth.length; i++) {
//   if (
//     formElements[i].type !== 'button' &&
//     formElements[i].type !== 'submit'
//   ) {
//     formElements[i].value = '';
//   }
// }

// function clearForm() {
//   refs.regEmail.value = '';
//   refs.regPassword.value = '';
// }

// loginEmailAndPassword().then(result => console.log(result));

// const loginEmailAndPassword = async () => {
//   const email = refs.txtEmail.value;
//   const password = refs.txtPassword.value;
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   console.log(userCredential.user);
// };

// const registerEmailAndPassword = async () => {
//   const email = refs.txtEmail.value;
//   const password = refs.txtPassword.value;

//   const userCredential = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );

//   console.log(userCredential.user);
// };
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
