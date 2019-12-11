import {generateFilmData} from './films-data';

const FILMS_QUANTITY = 15;

const FilmsList = [];

const generateFilmsList = () => {
  for (let i = 0; i < FILMS_QUANTITY; i++) {
    let generatedFilmData = generateFilmData();

    generatedFilmData.id = i;

    FilmsList.push(generatedFilmData);
  }
};

export {
  generateFilmsList,
  FilmsList
};
