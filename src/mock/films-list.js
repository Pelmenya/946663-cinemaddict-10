import {generateFilmData} from './films-data';

const FILMS_QUANTITY = 15;

const filmsList = [];

const generateFilmsList = () => {
  for (let i = 0; i < FILMS_QUANTITY; i++) {
    let generatedFilmData = generateFilmData();

    generatedFilmData.id = i;

    filmsList.push(generatedFilmData);
  }
};

export {
  generateFilmsList,
  filmsList
};
