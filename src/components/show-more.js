import {util} from './../util';
import FilmCard from './film-card';

const getShowMoreBtnTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class ShowMoreBtn {
  constructor(renderCardsAmount, filmsList) {
    this._renderCardsAmount = renderCardsAmount;
    this._filmsList = filmsList;
    this._element = null;
  }

  getTemplate() {
    return getShowMoreBtnTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
      this._element.addEventListener(`click`, this.onShowMoreBtnClick.bind(this));
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  onShowMoreBtnClick() {
    const cardsContainer = this._element.parentElement.querySelector(`.films-list__container`);
    let filmCardsAmount = cardsContainer.querySelectorAll(`.film-card`).length;
    let endRenderIndex = filmCardsAmount + this._renderCardsAmount;

    if (filmCardsAmount < this._filmsList.length && endRenderIndex <= this._filmsList.length) {
      let renderList = this._filmsList.slice(filmCardsAmount, endRenderIndex);
      let cardsList = [];

      for (let i = 0; i < renderList.length; i++) {
        cardsList.push(new FilmCard(renderList[i]).getElement());
      }

      for (let card of cardsList) {
        util.renderElement(cardsContainer, card);
      }
    }

    if (endRenderIndex >= this._filmsList.length) {
      this._element.remove();
    }
  }
}
