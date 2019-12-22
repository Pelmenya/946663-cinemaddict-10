import {Constant} from './constans';
import FilmCard from './components/film-card';

export const util = {
  getRandomInRange(min, max) {
    //  Включая минимальное и максимальное значение
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  },

  getRandomElementInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  },

  getRandomDate() {
    const MIN_YEAR = 1970;
    const MIN_MOUNTH_IN_YEAR = 0;
    const MAX_MOUNTH_IN_YEAR = 11;
    const MIN_DAY_IN_MOUNTH = 1;
    const MAX_DAY_IN_MOUNTH = 31;

    const currentYear = new Date().getFullYear();

    const randomDate = new Date(
        this.getRandomInRange(MIN_YEAR, currentYear),
        this.getRandomInRange(MIN_MOUNTH_IN_YEAR, MAX_MOUNTH_IN_YEAR),
        this.getRandomInRange(MIN_DAY_IN_MOUNTH, MAX_DAY_IN_MOUNTH),
        this.getRandomNumber(Constant.HOURS_IN_DAY),
        this.getRandomNumber(Constant.MINUTES_IN_HOUR)
    );

    return randomDate;
  },

  formatTime(timeInMinutes) {
    let hours = Math.floor(timeInMinutes / Constant.MINUTES_IN_HOUR);
    let minutes = timeInMinutes % Constant.MINUTES_IN_HOUR;

    return `${hours}h ${minutes}m`;
  },

  getMonthName(mounthNumber) {
    return Constant.MONTHS[mounthNumber - 1];
  },

  createElement(template) {
    const newElement = document.createElement(`div`);

    newElement.innerHTML = template;

    return newElement.firstChild;
  },

  renderElement(container, element, place = Constant.RENDER_POSITION.BEFOREEND) {
    switch (place) {
      case Constant.RENDER_POSITION.AFTERBEGIN:
        container.prepend(element);
        break;
      case Constant.RENDER_POSITION.BEFOREEND:
        container.append(element);
        break;
    }
  },

  getFilmsCards(cardsData) {
    let filmsCards = [];

    for (let i = 0; i < cardsData.length; i++) {
      filmsCards.push(new FilmCard(cardsData[i]).getElement());
    }

    return filmsCards;
  },
};
