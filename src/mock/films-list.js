import {generateFilmData} from './films-data';

const FILMS_QUANTITY = 15;

const generateFilmsDataList = () => {
  let filmsDataList = [];

  for (let i = 0; i < FILMS_QUANTITY; i++) {
    let generatedFilmData = generateFilmData();

    generatedFilmData.id = i + 1;

    filmsDataList.push(generatedFilmData);
  }

  return filmsDataList;
};

export {
  generateFilmsDataList
};
