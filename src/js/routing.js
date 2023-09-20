// import { fetchMoviesAndRender } from '../index';

// import { clearPage } from './renderServies';

// Отримайте посилання на елемент для відображення контенту
// const contentDiv = document.getElementById('content');
// const contentDiv = document.getElementById('content');

// // Функція, яка буде відображати вміст на основі поточного маршруту
// export function renderContent() {
//   const route = window.location.hash.substring(1); // Отримайте поточний маршрут без символу #
//   console.log(route);
//   // Визначте, який вміст відображати на основі маршруту
//   if (route === '/' || route === '') {
//     clearPage();
//     contentDiv.textContent = 'Це головна сторінка';
//     fetchMoviesAndRender();
//   } else if (route === '/library') {
//     contentDiv.textContent = 'Це сторінка "Бібліотека"';
//     fetchMoviesAndRender();
//   } else {
//     clearPage();
//     window.removeEventListener('hashchange', renderContent);
//     contentDiv.textContent = 'Сторінка не знайдена';
//   }
// }

// Додайте обробник подій для слідкування за зміною хешу (маршруту)
// window.addEventListener('onhashchange', renderContent);

// Викличте функцію renderContent одразу для відображення вмісту при завантаженні сторінки
// renderContent();
