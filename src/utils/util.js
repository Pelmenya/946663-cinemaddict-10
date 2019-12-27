import FilmCard from '../components/film-card';

import {
  HOURS_IN_DAY,
  MINUTES_IN_HOUR,
  MONTHS
} from './../constans';

const getRandomInRange = (min, max) => {
  //  Включая минимальное и максимальное значение
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

const getRandomElementInArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const getRandomDate = () => {
  const MIN_YEAR = 1970;
  const MIN_MOUNTH_IN_YEAR = 0;
  const MAX_MOUNTH_IN_YEAR = 11;
  const MIN_DAY_IN_MOUNTH = 1;
  const MAX_DAY_IN_MOUNTH = 31;

  const currentYear = new Date().getFullYear();

  const randomDate =
    new Date(
        getRandomInRange(MIN_YEAR, currentYear),
        getRandomInRange(MIN_MOUNTH_IN_YEAR, MAX_MOUNTH_IN_YEAR),
        getRandomInRange(MIN_DAY_IN_MOUNTH, MAX_DAY_IN_MOUNTH),
        getRandomNumber(HOURS_IN_DAY),
        getRandomNumber(MINUTES_IN_HOUR)
    );

  return randomDate;
};

const formatTime = (timeInMinutes) => {
  let hours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
  let minutes = timeInMinutes % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
};

const getMonthName = (mounthNumber) => {
  return MONTHS[mounthNumber - 1];
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);

  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getFilmsCards = (cardsData) => {
  let filmsCards = [];

  for (let i = 0; i < cardsData.length; i++) {
    filmsCards.push(new FilmCard(cardsData[i]));
  }

  return filmsCards;
};

const getFilmsCardsComponents = (cardsData) => {
  let filmsCardsComponents = [];

  for (let cardData of cardsData) {
    filmsCardsComponents.push(new FilmCard(cardData));
  }

  return filmsCardsComponents;
};

const getRenderCardsList = (
    cardsList,
    listType,
    cardsAmountInSubLists
) => {
  let renderCardList = [];

  switch (listType) {
    case `topRated`:
      if (cardsList.every(
          (film) => film.rating === cardsList[0].rating)
      ) {
        renderCardList = shuffleArray(cardsList)
          .slice(0, cardsAmountInSubLists);
      } else {
        renderCardList = cardsList
          .sort((a, b) => b.rating - a.rating)
          .slice(0, cardsAmountInSubLists);
      }

      break;

    case `mostCommented`:
      if (cardsList.every(
          (film) => film.commentsAmount === cardsList[0].commentsAmount
      )) {
        renderCardList = shuffleArray(cardsList)
          .slice(0, cardsAmountInSubLists);
      } else {
        renderCardList = cardsList
          .sort((a, b) => b.commentsAmount - a.commentsAmount)
          .slice(0, cardsAmountInSubLists);
      }

      break;
  }

  return renderCardList;
};

export {
  getRandomInRange,
  getRandomNumber,
  getRandomElementInArray,
  shuffleArray,
  getRandomDate,
  getFilmsCards,
  formatTime,
  getMonthName,
  createElement,
  getFilmsCardsComponents,
  getRenderCardsList
};
