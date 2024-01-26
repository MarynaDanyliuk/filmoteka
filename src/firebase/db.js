import { collection, getDocs, query, where } from 'firebase/firestore';

import { onAuthStateChanged } from 'firebase/auth';

import {
  addUserToFirestore,
  updateMovieInFirestore,
  deleteMovieInFirestore,
  readUserCollections,
} from './fb_cloudStore';

import { homePage, libraryPage } from '../js/content-pages';

import { renderGallary, clearPage } from '../js/renderServies';
import { renderContent } from '../js/routing';

import { MovieActiveId } from '../js/modal';
import { refs } from '../js/refs';
import { auth, db } from './fb_config';

import fetchApiMovies from '../js/apiService';
const FetchApiMovies = new fetchApiMovies();

let key = 'watched';

// ____________firebase/auth_________
const user = auth.currentUser;

// _____________firestore____________
const usersRef = collection(db, 'users');

// ______________eventListeners___________
refs.homeBtn.addEventListener('click', homePage);
refs.logo.addEventListener('click', homePage);
refs.buttonHeaderNav.addEventListener('click', onHeaderNavClick);
refs.butttonsLibrary.addEventListener('click', createLibraryCollection);

// _______________DB realization_______________-
export const monitorAuthState = user => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      //   console.log('user logged in', user);
      addUserToFirestore(user);
      renderContent(key, user);

      // _____________Click on Library navigation button_________
      refs.libraryBtn.addEventListener('click', async event => {
        if (!user) {
          return;
        }
        key = 'watched';
        event.preventDefault();
        clearPage();
        await libraryPage(key, user);
      });

      // ____________ Mobile Menu Click on Navigation button_______________
      const navItemMenu = refs.navItemMenu;
      if (navItemMenu) {
        for (let i = 0; i < navItemMenu.length; i++) {
          navItemMenu[i].addEventListener('click', event => {
            if (!user) {
              return;
            }
            refs.mobileMenu.classList.remove(`open`);
            NavBtnActive = event.target.getAttribute(`id`);
            if (NavBtnActive === 'home_btn') {
              homePage(user);
            } else {
              event.preventDefault();
              libraryPage(key, user);
            }
          });
        }
      }

      // _________________________________________________________
      refs.approveActionButton.addEventListener('click', async event => {
        event.preventDefault();
        await deleteMovieInFirestore(user, key, MovieActiveId);
        clearPage();
        await renderLibraryCollection(key, user);
      });
    } else {
      homePage();
      console.log('no user');
    }
  });
};

monitorAuthState(user);

// __________________Library functions_________________
const getLibrary = async (key, user) => {
  try {
    const userQuery = query(usersRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size > 0) {
      const userData = querySnapshot.docs[0].data();

      return userData[key];
    } else {
      console.log('No matching documents.');
      return [];
    }
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

export async function renderLibraryCollection(key, user) {
  getLibrary(key, user).then(movies => {
    renderGallary(movies, user);
    readUserCollections(user, key);
  });
}

export async function onHeaderNavClick(event) {
  clearPage();
  const user = auth.currentUser;
  key = event.target.getAttribute('id');

  if (key === 'watched') {
    refs.buttonWatched.classList.add('active_btn');
    refs.buttonQueue.classList.remove('active_btn');
    renderLibraryCollection(key, user);
  } else if (key === 'queue') {
    refs.buttonQueue.classList.add('active_btn');
    refs.buttonWatched.classList.remove('active_btn');
    renderLibraryCollection(key, user);
  }
}

export async function createLibraryCollection(event) {
  event.preventDefault();
  const user = auth.currentUser;
  console.log(MovieActiveId);

  key = event.target.getAttribute('id');

  if (event.target.nodeName !== `BUTTON`) {
    return;
  }

  await FetchApiMovies.fetchMovieDetailsById(MovieActiveId)
    .then(data => {
      updateMovieInFirestore(user, key, data);
    })
    .catch(error => console.log(error.message));
}
