import {
  getRandomInRange,
  formatTime,
  getRandomElementInArray,
  getRandomDate,
  shuffleArray,
  booleanList
} from './../util';

import {generateCommentsList} from './comments';

const MIN_SENTENCE_IN_DESCRIPTION = 1;
const MAX_SENTENCE_IN_DESCRIPTION = 3;
const MIN_RATING = 1;
const MAX_RATING = 9;
const MIN_FILM_DURATION = 60;
const MAX_FILM_DURATION = 180;

const FILMS_DESCRIPTION =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Cras aliquet varius magna, non porta ligula feugiat eget.
  Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra.
  Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
  Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
  Sed sed nisi sed augue convallis suscipit in sed felis.
  Aliquam erat volutpat.
  Nunc fermentum tortor ac porta dapibus.
  In rutrum ac purus sit amet tempus.`
  .split(`.\n  `);

const MOVIE_GENRES = [
  `biographical`,
  `action`,
  `western`,
  `military`,
  `detective`,
  `documentary`,
  `drama`,
  `historical`,
  `comedy`,
  `crime`,
  `melodrama`,
  `mystic`,
  `musical`,
  `adventures`,
  `family`,
  `horror`,
  `fantasy`
];

const POSTERS_TITLES = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const ageCategories = [
  `0+`,
  `6+`,
  `12+`,
  `16+`,
  `18+`
];

const movieTitles = [
  `Богемская рапсодия`,
  `Звезда родилась`,
  `Рома`,
  `Чёрная Пантера`,
  `Власть`,
  `Фаворитка`,
  `Черный клановец`,
  `Зеленая книга`,
  `Человек на Луне`,
  `Форма воды`,
  `Дюнкерк`,
  `Прочь`,
  `Темные времена`,
  `Призрачная нить`,
  `Секретное досье`
];

const getPosterUrl = () =>
  `images/posters/${getRandomElementInArray(POSTERS_TITLES)}`;

const getFilmDuration = () => formatTime(
    getRandomInRange(MIN_FILM_DURATION, MAX_FILM_DURATION)
);

const getFilmDescription = () => {
  const sentenceQuantity =
    getRandomInRange(MIN_SENTENCE_IN_DESCRIPTION, MAX_SENTENCE_IN_DESCRIPTION);

  let description = FILMS_DESCRIPTION
    .slice(getRandomInRange(MIN_SENTENCE_IN_DESCRIPTION, sentenceQuantity))
    .join(`. `);

  return description;
};

const getRating = () =>
  (MIN_RATING + Math.random() * (MAX_RATING + 1 - MIN_RATING)).toFixed(1);

const generateFilmData = () => {
  const filmData = {
    posterUrl: getPosterUrl(),
    ageСategory: getRandomElementInArray(ageCategories),
    title: getRandomElementInArray(movieTitles),
    titleOriginal: `fishTitle`,
    rating: getRating(),
    director: `someDirector`,
    writers: `some authors`,
    actors: `some actors`,
    releaseDate: getRandomDate(),
    duration: getFilmDuration(),
    country: `someCountry`,
    genres: shuffleArray(MOVIE_GENRES).slice(0, 3),
    description: getFilmDescription(),
    comments: generateCommentsList(),

    isInWatchlist: getRandomElementInArray(booleanList),
    isFavorite: getRandomElementInArray(booleanList),
    isAlreadyViewed: getRandomElementInArray(booleanList)
  };

  return filmData;
};

export {
  generateFilmData
};
