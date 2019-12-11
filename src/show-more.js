import {FilmsList} from './mock/films-list';

import {
  renderFilmCards,
  showMoreBtn,
  mainFilmsListContainer,
  CARDS_AMOUNT_IN_MAIN_LIST,
} from './main';

const onShowMoreBtnClick = () => {
  const filmCardsAmount = mainFilmsListContainer.querySelectorAll(`.film-card`).length;
  const endRenderIndex = filmCardsAmount + CARDS_AMOUNT_IN_MAIN_LIST;

  if (filmCardsAmount < FilmsList.length && endRenderIndex <= FilmsList.length) {
    renderFilmCards(FilmsList, filmCardsAmount, endRenderIndex, mainFilmsListContainer);

    if (endRenderIndex >= FilmsList.length) {
      showMoreBtn.classList.add(`visually-hidden`);
    }
  }
};

const addShowMoreBtnListener = () => {
  showMoreBtn.addEventListener(`click`, onShowMoreBtnClick);
};

export {
  addShowMoreBtnListener
};
