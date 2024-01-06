export const refs = {
  // _______________Header search form_____________
  form: document.querySelector(`.form`),
  input: document.getElementById('search-input'),
  button: document.querySelector(`.search-button`),

  // ________________Burger menu_______________________
  mobileMenu: document.querySelector('.menu-container'),
  openBurgerBtn: document.getElementById('open_burger_btn'),
  closeBurgerBtn: document.getElementById('close_burger_btn'),
  libraryBtnMenu: document.getElementById('library_btn_menu'),

  // ________________Gallery___________________
  gallery: document.querySelector(`.gallery`),
  buttonLoadMore: document.querySelector(`.load-more`),

  // _______________Modal___________
  modal: document.querySelector(`.modal`),
  modalContent: document.querySelector(`.modal_data`),
  movieImage: document.querySelector('.movie_image'),
  movieDescr: document.querySelector('.movie_descr'),
  buttonClose: document.querySelectorAll(`.modal_close`),
  modalBackdrop: document.querySelectorAll(`.modal_body`),

  // _______________Utils___________________
  body: document.querySelector(`body`),
  content: document.getElementById('content'),
  thumb: document.querySelector('.thumb'),

  // ______________Header__________________________
  headerNavLinks: document.querySelectorAll('.nav_item'),
  headerNavButtons: document.querySelector('.nav_list_button'),
  buttonWatched: document.getElementById('watched'),
  buttonQueue: document.getElementById('queue'),
  butttonsLibrary: document.querySelector('.modal_nav'),
  buttonHeaderNav: document.querySelector('.nav_list_button'),
  logo: document.querySelector('.logo'),
  homeBtn: document.getElementById(`home_btn`),
  libraryBtn: document.getElementById(`library_btn`),
  signOut: document.getElementById('auth_btn'),
  user: document.querySelector('.user'),

  // _______________Modal auth__________________________
  modalLogin: document.getElementById(`login`),
  modalRegister: document.getElementById(`register`),
  formsAuth: document.querySelectorAll(`.form_auth`),
  registerLink: document.getElementById(`register_link`),
  loginLink: document.getElementById(`login_link`),
  loginButton: document.getElementById(`login_btn`),
  registerButton: document.getElementById(`register_btn`),
  txtEmail: document.getElementById(`txtEmail`),
  txtPassword: document.getElementById(`txtPassword`),
  regEmail: document.getElementById(`regEmail`),
  regPassword: document.getElementById(`regPassword`),
  regPassword_: document.getElementById(`regPassword_`),
  // popupLinks: document.querySelectorAll(`.popup_link`),
  // modalRegister: document.querySelector(`.modal_register`),
  // genresList: document.getElementById(`genres`),
  // galleryCard: document.querySelector('.gallery_card'),
};
