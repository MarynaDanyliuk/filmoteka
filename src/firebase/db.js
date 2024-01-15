import { collection, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { addUserToFirestore, updateMovieInFirestore } from './fb_cloudStore';

import { homePage, libraryPage } from '../js/content-pages';

import { renderGallary, clearPage, renderUser } from '../js/renderServies';
import { renderContent } from '../js/routing';

import { MovieActiveId } from '../js/modal';
import { refs } from '../js/refs';
import { auth, db } from './fb_config';

import fetchApiMovies from '../js/apiService';
const FetchApiMovies = new fetchApiMovies();

let key = 'watched';
let moviesWatched = [];
let moviesQueue = [];

const user = auth.currentUser;
const usersRef = collection(db, 'users');

refs.homeBtn.addEventListener('click', homePage);

refs.buttonHeaderNav.addEventListener(
  'click',
  onButtonsHeaderNavClickRenderLibrary
);

refs.logo.addEventListener('click', homePage);

refs.butttonsLibrary.addEventListener('click', createLibraryCollection);

export const monitorAuthState = user => {
  onAuthStateChanged(auth, user => {
    if (user !== null) {
      //   console.log('user logged in', user);
      addUserToFirestore(user);
      renderContent(key, user);
      // _____________Click on Library navigation button_________
      refs.libraryBtn.addEventListener('click', event => {
        if (!user) {
          return;
        }
        key = 'watched';
        event.preventDefault();
        libraryPage(key, user);
      });

      // ____________ Mobile Menu Click on Navigation button_______________
      const navItemMenu = refs.navItemMenu;
      if (navItemMenu) {
        // console.log(navItemMenu);
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
              key = 'watched';
              event.preventDefault();
              libraryPage(key, user);
            }
          });
        }
      }
    } else {
      homePage();
      console.log('no user');
    }
  });
};

const getLibrary = async (key, user) => {
  const userQuery = query(usersRef, where('userId', '==', user.uid));
  try {
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size > 0) {
      const userData = querySnapshot.docs[0].data();

      moviesWatched.push(userData.watched);
      moviesQueue.push(userData.queue);

      if (key === 'watched') {
        return userData.watched;
      } else if (key === 'queue') {
        return userData.queue;
      }
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
  getLibrary(key, user).then(list => {
    renderGallary(list);
  });
}

monitorAuthState(user);

export async function onButtonsHeaderNavClickRenderLibrary(event) {
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

  console.log('key:', key);
  if (event.target.nodeName !== `BUTTON`) {
    return;
  }

  await getLibrary(key, user);

  await FetchApiMovies.fetchMovieDetailsById(MovieActiveId)
    .then(data => {
      console.log(data);
      updateMovieInFirestore(user, key);
      if (key === 'watched') {
        moviesWatched.push(data);
        updateMovieInFirestore(user);
      } else if (key === 'queue') {
        moviesQueue.push(data);
        updateMovieInFirestore(user);
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      alert('фільм додано в бібліотеку');
    });
}
