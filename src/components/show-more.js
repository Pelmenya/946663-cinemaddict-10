import FilmCard from './film-card';
import AbstractComponent from './absctract';
import {renderElement} from './../utils/render';

const getShowMoreBtnTemplate = () =>
  `<button class="films-list__show-more">Show more</button>`;

export default class ShowMoreBtn extends AbstractComponent {
  constructor(renderCardsAmount, filmsList) {
    super();

    this._renderCardsAmount = renderCardsAmount;
    this._filmsList = filmsList;
  }

  getTemplate() {
    return getShowMoreBtnTemplate();
  }

  onShowMoreBtnClick() {
    const cardsContainer =
      this._element.parentElement.querySelector(`.films-list__container`);
    let filmCardsAmount = cardsContainer.querySelectorAll(`.film-card`).length;
    let endRenderIndex = filmCardsAmount + this._renderCardsAmount;

    if (filmCardsAmount < this._filmsList.length &&
        endRenderIndex <= this._filmsList.length
    ) {
      let renderList = this._filmsList.slice(filmCardsAmount, endRenderIndex);
      let cardsList = [];

      for (let i = 0; i < renderList.length; i++) {
        cardsList.push(new FilmCard(renderList[i]).getElement());
      }

      for (let card of cardsList) {
        renderElement(cardsContainer, card);
      }
    }

    if (endRenderIndex >= this._filmsList.length) {
      this._element.remove();
    }
  }
}
