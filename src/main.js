import {generateFilmsDataList} from './mock/films-list';
import {generateUserProfile} from './mock/user-profile';
import UserProfile from './components/user-profile';
import Filter from './components/filter';
import Sort from './components/sort';
import FilmsAmountStatistic from './components/footer-statistic';
import {renderElement} from './utils/render';
import PageController from './page-controller';
import MainFilmsList from './components/main-films-list';
import ExtraFilmsList from './components/extra-films-list';
import {getFilmsCardsComponents} from './utils/util';

const TOP_RATED_FILMS_LIST_TITLE = `Top rated movies`;
const MOST_COMMENTED_FILMS_LIST_TITLE = `Most commented`;
const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);


const filmsDataList = generateFilmsDataList();
const filmsCardsComponents = getFilmsCardsComponents(filmsDataList);

const filter = new Filter(filmsDataList);
const sort = new Sort();
const filmsAmountStatistic = new FilmsAmountStatistic(filmsDataList.length);
const userProfile = new UserProfile(generateUserProfile());
const mainFilmsList = new MainFilmsList();
const topRatedFilmsList = new ExtraFilmsList(TOP_RATED_FILMS_LIST_TITLE);
const mostCommentedFilmsList = new ExtraFilmsList(MOST_COMMENTED_FILMS_LIST_TITLE);

renderElement(pageHeader, userProfile);
renderElement(pageMain, filter);
renderElement(pageMain, sort);
renderElement(pageMain, mainFilmsList);

const filmsListsContainer = mainFilmsList.getElement();

if (filmsDataList.every((film) => film.rating > 0)) {
  renderElement(filmsListsContainer, topRatedFilmsList);
}

if (filmsDataList.some((film) => film.comments.length > 0)) {
  renderElement(filmsListsContainer, mostCommentedFilmsList);
}

renderElement(pageFooter, filmsAmountStatistic);

const pageController = new PageController(
    pageMain,
    filmsCardsComponents,
    mainFilmsList,
    topRatedFilmsList,
    mostCommentedFilmsList,
    CARDS_AMOUNT_IN_MAIN_LIST,
    CARDS_AMOUNT_IN_SUB_LISTS
);

pageController.render();

export {
  mainFilmsList,
  topRatedFilmsList,
  mostCommentedFilmsList,
  CARDS_AMOUNT_IN_MAIN_LIST,
  CARDS_AMOUNT_IN_SUB_LISTS,
};
