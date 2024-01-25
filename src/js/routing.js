import { homePage, libraryPage, notFoundPage } from './content-pages';

export async function renderContent(key, user) {
  const route = window.location.hash.substring(1);
  console.log(route);
  if (route === '/' || route === '') {
    await homePage(user);
  } else if (route === '/library') {
    // console.log(key, user);
    await libraryPage(key, user);
  } else {
    notFoundPage();
  }
}
