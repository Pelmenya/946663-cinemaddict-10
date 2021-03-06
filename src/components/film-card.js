import {util} from './../util';
import FilmPopup from './film-popup';

const getFilmCardTemplate = (
    title,
    rating,
    releaseDate,
    duration,
    mainGenre,
    posterUrl,
    shortDescription,
    commentsAmount
) =>
  `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${releaseDate}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${mainGenre}</span>
    </p>
    <img src="${posterUrl}" alt="" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <a class="film-card__comments">${commentsAmount}</a>
    <form class="film-card__controls">
      <button class="
        film-card__controls-item
        button
        film-card__controls-item--add-to-watchlist
      ">
        Add to watchlist
      </button>
      <button class="
        film-card__controls-item
        button
        film-card__controls-item--mark-as-watched
      ">
        Mark as watched
      </button>
      <button class="
        film-card__controls-item
        button
        film-card__controls-item--favorite
      ">
        Mark as favorite
      </button>
    </form>
  </article>`;

export default class FilmCard {
  constructor(filmCardData) {
    this._element = null;

    this._filmCardData = filmCardData;
    this._cardPopup = new FilmPopup(filmCardData);
    this._MAX_DESCRIPTION_SYMBOLS_DISPLAYED = 139 - 3;
    this._MAX_DESCRIPTION_LENGTH = 140;

    this._posterUrl = filmCardData.posterUrl;
    this._title = filmCardData.title;
    this._rating = filmCardData.rating;
    this._releaseYear = filmCardData.releaseDate.getFullYear();
    this._duration = filmCardData.duration;
    this._id = filmCardData.id;

    this._mainGenre = util.getRandomElementInArray(filmCardData.genres);

    this._shortDescription =
      this.getShortFilmDescription(filmCardData.description);

    this._commentsAmount =
      `${filmCardData.comments.length}
      ${filmCardData.comments.length === 1 ? `comment` : `comments`}`;

  }

  getShortFilmDescription(description) {
    let shortDescription = description;

    if (description.length >= this._MAX_DESCRIPTION_LENGTH) {
      shortDescription =
        `${description.slice(0, this._MAX_DESCRIPTION_SYMBOLS_DISPLAYED)}...`;
    }

    return shortDescription;
  }

  getTemplate() {
    return getFilmCardTemplate(
        this._title,
        this._rating,
        this._releaseYear,
        this._duration,
        this._mainGenre,
        this._posterUrl,
        this._shortDescription,
        this._commentsAmount);
  }

  getOpeningPopupElements() {
    return [
      this._element.querySelector(`.film-card__poster`),
      this._element.querySelector(`.film-card__title`),
      this._element.querySelector(`.film-card__comments`)
    ];
  }

  onOpeningPopupElementsClick(evt) {
    evt.preventDefault();

    util.renderElement(
        document.querySelector(`.main`),
        this._cardPopup.getElement()
    );
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
      this._element.dataset.id = this.id;

      for (let element of this.getOpeningPopupElements()) {
        element.addEventListener(
            `click`,
            this.onOpeningPopupElementsClick.bind(this)
        );
      }
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
