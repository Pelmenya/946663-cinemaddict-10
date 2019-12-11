export const menuTemplate = (watchlistFilmsAmount, historyFilmsAmount, favoritesFilmsAmount) => `
<nav class="main-navigation">
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
  <a href="#stats" class="main-navigation__item main-navigation__item--additional">
    Stats
  </a>
</nav>

<ul class="sort">
  <li>
    <a href="#" class="sort__button sort__button--active">
      Sort by default
    </a>
  </li>
  <li>
    <a href="#" class="sort__button">
      Sort by date
    </a>
  </li>
  <li>
    <a href="#" class="sort__button">
      Sort by rating
    </a>
  </li>
</ul>`;
