import {userProfileTemplate} from './components/user-profile';
import {menuTemplate} from './components/menu';
import {filmCardTemplate} from './components/film-card';
import {generateUserProfile} from './mock/user-profile';
import {generateFilmsList} from './mock/films-list';
import {filmsList} from './mock/films-list';
import {generateFilmCard} from './mock/film-card';
import {generateFooterStatisticTemplate} from './components/footer-statistic';

import {renderFilmsLists} from './components/films-lists';
import {renderPopup} from './components/film-popup';

import {
  getFavoriteFilmsList,
  getWatchlist,
  getHistoryFilmsList
} from './components/filter';


const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);

const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const renderFilmCards = (filmsDataList, renderStartIndex, renderEndIndex, container) => {
  for (let i = renderStartIndex; i < renderEndIndex; i++) {
    let filmCard = generateFilmCard(filmsDataList[i]);

    renderTemplate(container, filmCardTemplate(filmCard));
  }
};

//  Генерируем список фильмов
generateFilmsList();

//  Фильтруем список фильмов
const watchlist = getWatchlist(filmsList);
const historyFilmsList = getHistoryFilmsList(filmsList);
const favoriteFilmsList = getFavoriteFilmsList(filmsList);

//  Начинаем отрисовывать элементы страницы
renderTemplate(pageHeader, userProfileTemplate(generateUserProfile()));
renderTemplate(pageMain, menuTemplate(watchlist.length, historyFilmsList.length, favoriteFilmsList.length));
renderFilmsLists(pageMain, filmsList);
renderPopup(pageMain, filmsList);

//  Генерируем footerStatistic
renderTemplate(pageFooter, generateFooterStatisticTemplate(filmsList.length));

export {
  renderFilmCards,
  renderTemplate
};
