import {util} from './../util';

const getMostCommentedFilmsList = (filmsListTitle) =>
  `<section class="films-list--extra">
    <h2 class="films-list__title">${filmsListTitle}</h2>
    <div class="films-list__container">
    </div>
  </section>`;

export default class MostCommentedFilmsList {
  constructor(filmsListTitle, cardsAmount, filmsDataList) {
    this._element = null;

    this._filmListTitle = filmsListTitle;
    this._filmsDataList = filmsDataList.slice();
    this._filmsCards = this.getCards(cardsAmount);
  }

  getCards(count) {
    let cardsData;

    if (
      this._filmsDataList.every(
          (film) =>
            film.comments.length === this._filmsDataList[0].comments.length)
    ) {
      cardsData = util
        .shuffleArray(this._filmsDataList)
        .slice(0, count);
    } else {
      cardsData = this._filmsDataList
        .sort((a, b) => b.comments.length - a.comments.length)
        .slice(0, count);
    }

    return util.getFilmsCards(cardsData);
  }

  getTemplate() {
    return getMostCommentedFilmsList(
        this._filmListTitle,
        this._filmsCardsTemplates
    );
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
