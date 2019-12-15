import {getRandomElementInArray} from './../util';

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_DESCRIPTION_SYMBOLS_DISPLAYED = 139 - 3;

const getShortFilmDescription = (description) => {
  let shortDescription = description;

  if (description.length >= MAX_DESCRIPTION_LENGTH) {
    shortDescription = `${description.slice(0, MAX_DESCRIPTION_SYMBOLS_DISPLAYED)}...`;
  }

  return shortDescription;
};

const generateFilmCard = (filmData) => {
  const filmCard = {
    posterUrl: filmData.posterUrl,
    title: filmData.title,
    rating: filmData.rating,
    releaseYear: filmData.releaseDate.getFullYear(),
    duration: filmData.duration,
    mainGenre: getRandomElementInArray(filmData.genres),
    shortDescription: getShortFilmDescription(filmData.description),
    commentsAmount: `${filmData.comments.length} ${filmData.comments.length === 1 ? `comment` : `comments`}`
  };

  return filmCard;
};
export {
  generateFilmCard
};

export default generateFilmCard;
