import MainFilmsList from './components/main-films-list';
import ExtraFilmsList from './components/extra-films-list';
import ShowMoreBtn from './components/show-more';
import Filter from './components/filter';
import Sort from './components/sort';

import {
  getRenderCardsList,
  getFilmsCardsComponents
} from './utils/util';

import {
  renderFilmsCards,
  renderElement
} from './utils/render';

import {
  MAIN_FILMS_LIST_TITLE,
  TOP_RATED_FILMS_LIST_TITLE,
  MOST_COMMENTED_FILMS_LIST_TITLE,
  CARDS_AMOUNT_IN_MAIN_LIST,
} from './constans';

export default class PageController {
  constructor(container) {
    this._container = container;
  }


  render(filmsDataList) {
    const filmsList = new MainFilmsList(MAIN_FILMS_LIST_TITLE);
    const topRatedFilmsList = new ExtraFilmsList(TOP_RATED_FILMS_LIST_TITLE);
    const mostCommentedFilmsList = new ExtraFilmsList(MOST_COMMENTED_FILMS_LIST_TITLE);
    const showMoreBtn = new ShowMoreBtn();
    const filter = new Filter(filmsDataList);
    const sort = new Sort();

    //  Генерируем компоненты карточек из полученных данных
    const filmsCardsComponents = getFilmsCardsComponents(filmsDataList);

    const filmsCardsElemenstClickHandler = (evt) => {
      const getCardObject = () => {
        const target = evt.currentTarget;
        const elementId = Number(target.parentElement.dataset.id);

        const cardObject = filmsCardsComponents
          .find((cardData) => elementId === cardData.id);

        return cardObject;
      };

      const cardPopup = getCardObject().getCardPopup();

      renderElement(this._container, cardPopup);

      cardPopup.renderPopupComments();
      cardPopup.setCloseBtnClickHandler();
    };

    for (let filmCard of filmsCardsComponents) {
      filmCard.setClickHandler(filmsCardsElemenstClickHandler);
    }

    renderElement(this._container, filter);
    renderElement(this._container, sort);
    renderElement(this._container, filmsList);

    const filmsListsContainer = filmsList.getElement();

    //  Находим контейнер для основного списка фильмов
    const mainFilmsListContainer = filmsListsContainer.querySelector(`.films-list`);
    //  Отрисовываем в нем карточки
    renderFilmsCards(
        filmsCardsComponents,
        mainFilmsListContainer,
        CARDS_AMOUNT_IN_MAIN_LIST
    );

    // Если длина массива данных карточек больше количества установленного в мейн-листе, тогда отрисовываем и добавляем логику showMoreBtn
    if (filmsDataList.length > CARDS_AMOUNT_IN_MAIN_LIST) {
      renderElement(mainFilmsListContainer, showMoreBtn);

      const showMoreBtnClickHandler = () =>
        showMoreBtn.renderMoreCards(CARDS_AMOUNT_IN_MAIN_LIST, filmsCardsComponents);

      showMoreBtn.setClickHandler(showMoreBtnClickHandler);
    }

    //  Отрисовываем TopRated, если выполняется условие
    if (filmsDataList.every((film) => film.rating > 0)) {
      renderElement(filmsListsContainer, topRatedFilmsList);

      renderFilmsCards(
          getRenderCardsList(
              filmsCardsComponents,
              `topRated`
          ),
          topRatedFilmsList.getElement()
      );
    }

    //  Отрисовываем MostCommented, если выполняется условие
    if (filmsDataList.some((film) => film.comments.length > 0)) {
      renderElement(filmsListsContainer, mostCommentedFilmsList);

      renderFilmsCards(
          getRenderCardsList(
              filmsCardsComponents,
              `mostCommented`
          ),
          mostCommentedFilmsList.getElement()
      );
    }
  }
}
