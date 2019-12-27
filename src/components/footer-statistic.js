import AbstractComponent from './absctract';

const getFooterStatisticTemplate = (numberOfFilms) => {
  const statisticDescription =
    numberOfFilms === 1 ? `movie inside` : `movies inside`;

  const statisticTemplate =
    `<section class="footer__statistics">
      <p>${numberOfFilms} ${statisticDescription}</p>
    </section>`;

  return statisticTemplate;
};

export default class FilmsAmountStatistic extends AbstractComponent {
  constructor(numberOfFilms) {
    super();

    this._numberOfFilms = numberOfFilms;
  }

  getTemplate() {
    return getFooterStatisticTemplate(this._numberOfFilms);
  }
}
