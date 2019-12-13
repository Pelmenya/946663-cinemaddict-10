import {userProfileTemplate} from './components/user-profile';
import {menuTemplate} from './components/menu';
import {filmsSectionTemplate} from './components/films-section';
import {filmCardTemplate} from './components/film-card';
import {filmListTemplate} from './components/film-list';
import {showMoreBtnTemplate} from './components/show-more';
import {generateUserProfile} from './mock/user-profile';
import {generateFilmsList} from './mock/films-list';
import {filmsList} from './mock/films-list';
import {generateFilmCard} from './mock/film-card';
import {generateFilmPopup} from './mock/film-popup';
import {addShowMoreBtnListener} from './show-more';
import {getRandomElementInArray} from './util';
import {renderComments} from './components/user-comments';

import {
  filmPopupTemplate,
  addClosePopupLogic
} from './components/film-popup';

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

//  Получаем случайный фильм списка и на его основе формируем popupData
const randomFilmData = getRandomElementInArray(filmsList);
const popupData = generateFilmPopup(randomFilmData);

//  Фильтруем список фильмов
const watchlist = getWatchlist(filmsList);
const historyFilmsList = getHistoryFilmsList(filmsList);
const favoriteFilmsList = getFavoriteFilmsList(filmsList);

//  Начинаем отрисовывать элементы страницы
renderTemplate(pageHeader, userProfileTemplate(generateUserProfile()));
renderTemplate(pageMain, menuTemplate(watchlist.length, historyFilmsList.length, favoriteFilmsList.length));
renderTemplate(pageMain, filmsSectionTemplate());
renderTemplate(pageMain, filmPopupTemplate(popupData));

//  Находим попап после его отрисовки
const popupContainer = document.querySelector(`.film-details`);
const closePopupBtn = popupContainer.querySelector(`.film-details__close-btn`);
const popupCommentListContainer = popupContainer.querySelector(`.film-details__comments-list`);
//  Логикa закрытия попапа
addClosePopupLogic(popupContainer, closePopupBtn);
//  Отрисовываем установленно количество комментариев случайного фильма внутри попапа
renderComments(popupData, popupCommentListContainer);

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

renderFilmCards(filmsList, 0, CARDS_AMOUNT_IN_MAIN_LIST, mainFilmsListContainer);

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
  const sortFilmListByRating = filmsList
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
  const sortFilmListByMostCommented = filmsList
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
  showMoreBtn,
  renderTemplate
};
