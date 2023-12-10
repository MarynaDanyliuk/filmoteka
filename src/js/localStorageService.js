export function setItemsLocalStorage(key, movies) {
  try {
    const MoviesStr = JSON.stringify(movies);

    localStorage.setItem(key, MoviesStr);
  } catch (error) {
    console.log(error.message);
  }
}

export function getItemsLocalStorage(key) {
  try {
    const savedMovies = localStorage.getItem(key);

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }
    // savedMovies === null ? undefined : JSON.parse(savedMovies);
  } catch (error) {
    console.log(error.message);
  }
}

export function removeItemsFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}
