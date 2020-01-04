const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MAIN_FILMS_LIST_TITLE = `All movies. Upcoming`;
const TOP_RATED_FILMS_LIST_TITLE = `Top rated movies`;
const MOST_COMMENTED_FILMS_LIST_TITLE = `Most commented`;
const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const BOOLEAN_VALUES = [true, false];

const RenderPosition = {
  //   внутрь elem, в самое начало.
  AFTERBEGIN: `afterBegin`,
  //  внутрь elem, в конец.
  BEFOREEND: `beforeEnd`,
};

export {
  MAIN_FILMS_LIST_TITLE,
  TOP_RATED_FILMS_LIST_TITLE,
  MOST_COMMENTED_FILMS_LIST_TITLE,
  CARDS_AMOUNT_IN_MAIN_LIST,
  CARDS_AMOUNT_IN_SUB_LISTS,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  MONTHS,
  BOOLEAN_VALUES,
  RenderPosition
};
