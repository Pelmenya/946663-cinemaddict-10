import {getMonthName} from './../utils/util';

const generateFilmPopup = (filmData) => {
  const filmPopupData = {
    posterUrl: filmData.posterUrl,
    ageСategory: filmData.ageСategory,
    title: filmData.title,
    titleOriginal: filmData.titleOriginal,
    rating: filmData.rating,
    director: filmData.director,
    writers: filmData.writers,
    actors: filmData.actors,
    releaseDate:
      `${filmData.releaseDate.getDate()}
      ${getMonthName(filmData.releaseDate.getMonth())}
      ${filmData.releaseDate.getFullYear()}`,
    runtime: filmData.duration,
    country: filmData.country,
    genres: filmData.genres,
    description: filmData.description,
    comments: filmData.comments
  };

  return filmPopupData;
};

export {
  generateFilmPopup,
};
