import {userProfileTemplate} from './components/user-profile.js';
import {menuTemplate} from './components/menu';
import {filmsSectionTemplate} from './components/films-section';
import {filmPopupTemplate} from './components/film-popup';
import {filmCardTemplate} from './components/film-card';
import {filmListTemplate} from './components/film-list';
import {showMoreBtnTemplate} from './components/show-more';

const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);

const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

renderTemplate(pageHeader, userProfileTemplate());
renderTemplate(pageMain, menuTemplate());
renderTemplate(pageMain, filmsSectionTemplate());
renderTemplate(pageMain, filmPopupTemplate());

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

for (let i = 0; i < CARDS_AMOUNT_IN_MAIN_LIST; i++) {
  renderTemplate(mainFilmsListContainer, filmCardTemplate());
}
// Находим контейнеры для карточек в extraFilmsLists после их отрисовки и рендерим в них необходимое количство filmCards
const extraFilmsLists = Array.from(filmsListsContainer.querySelectorAll(`.films-list--extra`));

const extraFilmsListsContainers = extraFilmsLists.map((filmsList) =>
  filmsList.querySelector(`.films-list__container`)
);

extraFilmsListsContainers.forEach((filmsList) => {
  for (let i = 0; i < CARDS_AMOUNT_IN_SUB_LISTS; i++) {
    renderTemplate(filmsList, filmCardTemplate());
  }
});
