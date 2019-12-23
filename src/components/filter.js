import {util} from './../util';

const getFilterTemplate = (
    watchlistFilmsAmount,
    historyFilmsAmount,
    favoritesFilmsAmount
) =>
  `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">
      All movies
    </a>
    <a href="#watchlist" class="main-navigation__item">
      Watchlist
      <span class="main-navigation__item-count">${watchlistFilmsAmount}</span>
    </a>
    <a href="#history" class="main-navigation__item">
      History
      <span class="main-navigation__item-count">${historyFilmsAmount}</span>
    </a>
    <a href="#favorites" class="main-navigation__item">
      Favorites
      <span class="main-navigation__item-count">${favoritesFilmsAmount}</span>
    </a>
    <a
      href="#stats"
      class="main-navigation__item main-navigation__item--additional
    ">
      Stats
    </a>
  </nav>`;

export default class Filter {
  constructor(filmsDataList) {
    this._element = null;

    this._filmsDataList = filmsDataList;
  }

  getTemplate() {
    return getFilterTemplate(
        this.getWatchlist().length,
        this.getHistoryFilmsList().length,
        this.getFavoriteFilmsList().length
    );
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getFavoriteFilmsList() {
    return this._filmsDataList.filter((film) => film.isFavorite === true);
  }

  getWatchlist() {
    return this._filmsDataList.filter((film) => film.isInWatchlist === true);
  }

  getHistoryFilmsList() {
    return this._filmsDataList.filter((film) => film.isAlreadyViewed === true);
  }
}
