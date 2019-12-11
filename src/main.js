import {userProfileTemplate} from './components/user-profile';
import {menuTemplate} from './components/menu';
import {filmsSectionTemplate} from './components/films-section';
import {filmPopupTemplate} from './components/film-popup';
import {filmCardTemplate} from './components/film-card';
import {filmListTemplate} from './components/film-list';
import {showMoreBtnTemplate} from './components/show-more';
import {generateUserProfile} from './mock/user-profile';
import {generateFilmsList} from './mock/films-list';
import {FilmsList} from './mock/films-list';
import {generateFilmCard} from './mock/film-card';
import {generateFilmPopup} from './mock/film-popup';
import {addShowMoreBtnListener} from './show-more';

import {
  getFavoriteFilmsList,
  getWatchlist,
  getHistoryFilmsList
} from './filter';

const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);

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
const watchlist = getWatchlist(FilmsList);
const historyFilmsList = getHistoryFilmsList(FilmsList);
const favoriteFilmsList = getFavoriteFilmsList(FilmsList);

//  Начинаем отрисовывать элементы страницы
renderTemplate(pageHeader, userProfileTemplate(generateUserProfile()));
renderTemplate(pageMain, menuTemplate(watchlist.length, historyFilmsList.length, favoriteFilmsList.length));
renderTemplate(pageMain, filmsSectionTemplate());
renderTemplate(pageMain, filmPopupTemplate(generateFilmPopup(FilmsList[0])));

//  Находим отрисованный контейнер
const filmsListsContainer = pageMain.querySelector(`.films`);

// Отрисовываем контейнеры для списков фильмов
renderTemplate(
    filmsListsContainer,
    filmListTemplate(`All movies. Upcoming`, `visually-hidden`)
);

renderTemplate(
    filmsListsContainer,
    filmListTemplate(`Top rated`, ``, `--extra`)
);

renderTemplate(
    filmsListsContainer,
    filmListTemplate(`Most commented`, ``, `--extra`)
);

// Находим контейнер для основного списка фильмов после его отрисовки и рендерим в нем showMoreBtn && filmCards
const mainFilmsList = filmsListsContainer.querySelector(`.films-list`);
const mainFilmsListContainer = mainFilmsList.querySelector(`.films-list__container`);

renderTemplate(mainFilmsList, showMoreBtnTemplate());

const showMoreBtn = document.querySelector(`.films-list__show-more`);

renderFilmCards(FilmsList, 0, CARDS_AMOUNT_IN_MAIN_LIST, mainFilmsListContainer);

// Находим контейнеры для карточек в extraFilmsLists после их отрисовки и рендерим в них необходимое количство filmCards
const extraFilmsLists = Array.from(filmsListsContainer.querySelectorAll(`.films-list--extra`));

//  Функция для поиска extra контейнера по его заголовку
const findExtraContainerByName = (containerName) => {
  return extraFilmsLists.find((list) => list.children[0].innerHTML === containerName);
};

// Находим и заполняем TopRated
const topRatedSection = findExtraContainerByName(`Top rated`);
const topRatedContainer = topRatedSection.children[1];

const getTopRatedFilmsList = () => {
  const sortFilmListByRating = FilmsList
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0, CARDS_AMOUNT_IN_SUB_LISTS);

  return sortFilmListByRating;
};

const topRatedFilmsList = getTopRatedFilmsList();

renderFilmCards(topRatedFilmsList, 0, topRatedFilmsList.length, topRatedContainer);

// Находим и заполняем MostCommented
const mostCommentedSection = findExtraContainerByName(`Most commented`);
const mostCommentedContainer = mostCommentedSection.children[1];

const getMostCommentedFilmsList = () => {
  const sortFilmListByMostCommented = FilmsList
  .slice()
  .sort((a, b) => b.comments.length - a.comments.length)
  .slice(0, CARDS_AMOUNT_IN_SUB_LISTS);

  return sortFilmListByMostCommented;
};

const mostCommentedFilmsList = getMostCommentedFilmsList();

renderFilmCards(mostCommentedFilmsList, 0, mostCommentedFilmsList.length, mostCommentedContainer);

//  Добавляем обработчик клика showMoreBtn
addShowMoreBtnListener(mainFilmsListContainer);

export {
  CARDS_AMOUNT_IN_MAIN_LIST,
  renderFilmCards,
  mainFilmsListContainer,
  showMoreBtn
};
