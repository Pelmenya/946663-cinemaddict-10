import {generateFilmsDataList} from './mock/films-list';
import {generateUserProfile} from './mock/user-profile';
import {renderElement} from './utils/render';
import FilmsAmountStatistic from './components/footer-statistic';
import UserProfile from './components/user-profile';
import PageController from './page-controller';

const pageHeader = document.querySelector(`.header`);
const pageMain = document.querySelector(`.main`);
const pageFooter = document.querySelector(`.footer`);

const filmsDataList = generateFilmsDataList();

const filmsAmountStatistic = new FilmsAmountStatistic(filmsDataList.length);
const userProfile = new UserProfile(generateUserProfile());

renderElement(pageHeader, userProfile);
renderElement(pageFooter, filmsAmountStatistic);

const pageController = new PageController(pageMain);

pageController.render(filmsDataList);
