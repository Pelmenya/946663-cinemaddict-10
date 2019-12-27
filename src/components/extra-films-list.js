import AbstractComponent from './absctract';


const getExtraFilmsListTemplate = (filmsListTitle) =>
  `<section class="films-list--extra">
    <h2 class="films-list__title">${filmsListTitle}</h2>
    <div class="films-list__container"></div>
  </section>`;

export default class ExtraFilmsList extends AbstractComponent {
  constructor(title) {
    super();

    this._filmsListTitle = title;
  }

  getTemplate() {
    return getExtraFilmsListTemplate(this._filmsListTitle);
  }
}
