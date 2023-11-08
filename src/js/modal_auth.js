import { refs } from './refs';
import { closeModal } from './modal';

refs.libraryBtn.addEventListener(`click`, openModalAuth);
refs.registerLink.addEventListener('click', openModalAuth);
refs.loginLink.addEventListener('click', openModalAuth);
// refs.buttonClose.addEventListener('click', closeModalAuth);

const body = refs.body;
const modalLogin = refs.modalLogin;
const modalRegister = refs.modalRegister;
const popupLinks = refs.popupLinks;
const popupClosedButtons = refs.buttonCloseAuth;

console.log(popupClosedButtons);

let unlock = true;
let ModalActive = '';

function openModalAuth(event) {
  event.preventDefault();

  ModalActive = event.target.getAttribute('id');

  console.log(ModalActive);

  if (ModalActive === 'library_btn') {
    refs.modalLogin.classList.toggle(`open`);
  } else {
    refs.modalRegister.classList.toggle(`open`);
    refs.modalLogin.classList.toggle(`open`);
  }

  return ModalActive;
}

if (popupClosedButtons) {
  for (let i = 0; i < popupClosedButtons.length; i++) {
    const el = popupClosedButtons[i];
    console.log(el);
    el.addEventListener('click', e => {
      e.preventDefault();
      console.log(e.target.closest('.modal'));
      e.target.closest('.modal').classList.remove('open');
    });
  }
}

// async function closeModalAuth(openModalAuth, event) {
//   event.preventDefault();
//   const ModalActive = await openModalAuth();
//   console.log(ModalActive);

//   //   console.log(e.target.closest('.modal'));
//   //   popupActivea.classList.remove('open');
// }

//   refs.modalLogin.style.display = 'none';
//   refs.modalRegister.classList.remove(`open`);

// function openModalRegister(event) {
//   event.preventDefault();
//   refs.modalRegister.classList.add(`open`);
//   refs.modalLogin.classList.remove(`open`);
// }

// function clearModalAuth() {
//   refs.modalRegister.innerHTML = '';
//   refs.modalLogin.innerHTML = '';
// }

// refs.popupLinks.addEventListener('click', openModalAuth);

// let currentModalAuth = refs.modalLogin;

// const popupLinks = refs.popupLinks || [];

// refs.libraryBtn.addEventListener('click', openCurrentModal);

// function openCurrentModal(event) {
//   if (popupLinks.length > 0) {
//     for (i = 0; i < popupLinks.length; i++) {
//       const popupLink = popupLinks[i];
//       const currentModalAuthName = popupLink
//         .getAttribute('href')
//         .replace('#', '');
//       currentModalAuth = document.getElementById(currentModalAuthName);
//       return currentModalAuth;
//     }
//     return currentModalAuth;
//   }
//   console.log(currentModalAuth);
//   currentModalAuth.classList.add(`open`);
//   event.preventDefault();
// }
