import AbstractComponent from './absctract';
import {renderFilmsCards} from './../utils/render';

const getShowMoreBtnTemplate = () =>
  `<button class="films-list__show-more">Show more</button>`;

export default class ShowMoreBtn extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return getShowMoreBtnTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }

  renderMoreCards(renderCardsAmount, cardsComponents) {
    const cardsContainer = this._element.parentElement;

    let totalCardsInContainer = cardsContainer.querySelectorAll(`.film-card`).length;
    let endRenderIndex = totalCardsInContainer + renderCardsAmount;

    if (endRenderIndex <= cardsComponents.length) {
      let renderList = cardsComponents.slice(totalCardsInContainer, endRenderIndex);

      renderFilmsCards(renderList, cardsContainer);
    }

    if (endRenderIndex >= cardsComponents.length) {
      this.removeElement();
    }
  }
}
