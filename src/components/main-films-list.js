import AbstractComponent from './absctract';

const getMainFilmsListTemplate = (mainFilmsListTitle) =>
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">${mainFilmsListTitle}</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`;

export default class MainFilmsList extends AbstractComponent {
  constructor() {
    super();

    this._LIST_TITLE = `All movies. Upcoming`;
  }

  getTemplate() {
    return getMainFilmsListTemplate(this._LIST_TITLE);
  }
}
