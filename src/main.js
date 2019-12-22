import {generateFilmsDataList} from './mock/films-list';
import {generateUserProfile} from './mock/user-profile';
import {util} from './util';
import UserProfile from './components/user-profile';
import Filter from './components/filter';
import Sort from './components/sort';
import FilmsAmountStatistic from './components/footer-statistic';
import MainFilmsList from './components/main-films-list';
import TopRatedFilmsList from './components/top-rated-films-list';
import MostCommentedFilmsList from './components/most-commented-list';
import ShowMoreBtn from './components/show-more';

const MAIN_FILMS_LIST_TITLE = `All movies. Upcoming`;
const TOP_RATED_FILMS_LIST_TITLE = `Top rated movies`;
const MOST_COMMENTED_FILMS_LIST_TITLE = `Most commented`;
const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);

const filmsDataList = generateFilmsDataList();
const filmsListsContainerTemplate = `<section class="films"></section>`;
const filmsListElement = util.createElement(filmsListsContainerTemplate);

const filter = new Filter(filmsDataList);
const sort = new Sort();
const mainFilmsList = new MainFilmsList(MAIN_FILMS_LIST_TITLE, filmsDataList, CARDS_AMOUNT_IN_MAIN_LIST);
const topRatedFilmsList = new TopRatedFilmsList(TOP_RATED_FILMS_LIST_TITLE, CARDS_AMOUNT_IN_SUB_LISTS, filmsDataList);
const mostCommentedFilmsList = new MostCommentedFilmsList(MOST_COMMENTED_FILMS_LIST_TITLE, CARDS_AMOUNT_IN_SUB_LISTS, filmsDataList);
const filmsAmountStatistic = new FilmsAmountStatistic(filmsDataList.length);
const userProfile = new UserProfile(generateUserProfile());
const showMoreBtn = new ShowMoreBtn(CARDS_AMOUNT_IN_MAIN_LIST, filmsDataList);

util.renderElement(pageHeader, userProfile.getElement());
util.renderElement(pageMain, filter.getElement());
util.renderElement(pageMain, sort.getElement());
util.renderElement(pageMain, filmsListElement);

//  Находим созданный контейнер для списков фильмов и отрисовываем в нем списки
const filmsListContainer = pageMain.querySelector(`.films`);

util.renderElement(filmsListContainer, mainFilmsList.getElement());

if (filmsDataList.every((film) => film.rating > 0)) {
  util.renderElement(filmsListContainer, topRatedFilmsList.getElement());
}

if (filmsDataList.some((film) => film.comments.length > 0)) {
  util.renderElement(filmsListContainer, mostCommentedFilmsList.getElement());
}

// Отрисовываем и реализуем логику showMoreBtn
const mainFilmsListContainer = document.querySelector(`.films-list`);
util.renderElement(mainFilmsListContainer, showMoreBtn.getElement());

util.renderElement(pageFooter, filmsAmountStatistic.getElement());
