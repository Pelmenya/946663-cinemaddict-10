import {util} from './../util';

const getFooterStatisticTemplate = (numberOfFilms) => {
  const statisticDescription =
    numberOfFilms === 1 ? `movie inside` : `movies inside`;

  const statisticTemplate =
    `<section class="footer__statistics">
      <p>${numberOfFilms} ${statisticDescription}</p>
    </section>`;

  return statisticTemplate;
};

export default class FilmsAmountStatistic {
  constructor(numberOfFilms) {
    this._element = null;

    this._numberOfFilms = numberOfFilms;
  }

  getTemplate() {
    return getFooterStatisticTemplate(this._numberOfFilms);
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
