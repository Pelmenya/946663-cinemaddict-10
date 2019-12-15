import {filmsList} from './../mock/films-list';
import {CARDS_AMOUNT_IN_MAIN_LIST} from './films-lists';

import {
  renderFilmCards,
  renderTemplate
} from './../main';

const showMoreBtnTemplate = () => `<button class="films-list__show-more">Show more</button>`;

const renderShowMoreBtn = (container) => {
  renderTemplate(container, showMoreBtnTemplate());

  const showMoreBtn = container.querySelector(`.films-list__show-more`);

  const onShowMoreBtnClick = () => {
    const filmCardsAmount = container.querySelectorAll(`.film-card`).length;
    const cardsContainer = container.querySelector(`.films-list__container`);
    const endRenderIndex = filmCardsAmount + CARDS_AMOUNT_IN_MAIN_LIST;

    if (filmCardsAmount < filmsList.length && endRenderIndex <= filmsList.length) {
      renderFilmCards(filmsList, filmCardsAmount, endRenderIndex, cardsContainer);

      if (endRenderIndex >= filmsList.length) {
        showMoreBtn.remove();
        showMoreBtn.removeEventListener(`click`, onShowMoreBtnClick);
      }
    }
  };

  showMoreBtn.addEventListener(`click`, onShowMoreBtnClick);
};

export {renderShowMoreBtn};
