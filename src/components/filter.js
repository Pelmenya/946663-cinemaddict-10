const getFavoriteFilmsList =
  (filmsList) => filmsList.filter((film) => film.isFavorite === true);

const getWatchlist =
  (filmsList) => filmsList.filter((film) => film.isInWatchlist === true);

const getHistoryFilmsList =
  (filmsList) => filmsList.filter((film) => film.isAlreadyViewed === true);

export {
  getFavoriteFilmsList,
  getWatchlist,
  getHistoryFilmsList,
};
