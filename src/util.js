import {
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  MONTHS
} from './const';

const booleanList = [true, false];

const getRandomInRange = (min, max) =>
  //  Включая минимальное и максимальное значение
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomNumber = function (maxNumber) {
  return Math.floor(Math.random() * maxNumber);
};

const shuffleArray = function (array) {
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

  const randomDate = new Date(
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

const getRandomElementInArray = (array) => array[getRandomInRange(0, array.length - 1)];

const getMonthName = (mounthNumber) => MONTHS[mounthNumber - 1];

export {
  getMonthName,
  shuffleArray,
  getRandomNumber,
  getRandomElementInArray,
  getRandomInRange,
  getRandomDate,
  formatTime,
  booleanList
};
