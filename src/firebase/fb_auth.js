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


