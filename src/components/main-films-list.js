import {util} from './../util';

const getMainFilmsListTemplate = (mainFilmsListTitle) =>
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">${mainFilmsListTitle}</h2>
    <div class="films-list__container">
    </div>
  </section>`;

export default class MainFilmsList {
  constructor(mainFilmsListTitle, filmsDataList, defaultCardsAmount) {
    this._element = null;
    this._filmsDataList = filmsDataList;
    this._mainFilmsListTitle = mainFilmsListTitle;
    this._filmsCards = this.getCards(defaultCardsAmount);
  }

  getCards(count) {
    return util.getFilmsCards(this._filmsDataList.slice(0, count));
  }

  getTemplate() {
    return getMainFilmsListTemplate(this._mainFilmsListTitle);
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());

      for (let i = 0; i < this._filmsCards.length; i++) {
        util.renderElement(
            this._element.querySelector(`.films-list__container`),
            this._filmsCards[i]
        );
      }
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
