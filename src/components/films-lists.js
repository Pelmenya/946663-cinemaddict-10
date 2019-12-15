import {renderShowMoreBtn} from './show-more';
import {shuffleArray} from './../util';

import {
  renderTemplate,
  renderFilmCards,
} from './../main';

const CARDS_AMOUNT_IN_MAIN_LIST = 5;
const CARDS_AMOUNT_IN_SUB_LISTS = 2;

const topRatedSectionTitle = `Top rated movies`;
const mostCommentedSectionTitle = `Most commented`;

const filmsSectionTemplate = () => `<section class="films"></section>`;

const filmListTemplate = (listName, hiddenState = ``, listModifier = ``) => `
  <section class="films-list${listModifier}">
    <h2 class="films-list__title ${hiddenState}">${listName}</h2>
    <div class="films-list__container"></div>
  </section>`;

function findExtraContainerByName(containerName, container) {
  const extraFilmsLists = Array.from(container.querySelectorAll(`.films-list--extra`));

  return extraFilmsLists.find((list) => list.children[0].innerHTML === containerName);
}

const renderMainList = (container, dataList) => {
  const mainFilmsListTitle = `All movies. Upcoming`;

  renderTemplate(
      container,
      filmListTemplate(mainFilmsListTitle, `visually-hidden`)
  );

  const mainFilmsListContainer = container.querySelector(`.films-list__container`);

  renderFilmCards(dataList, 0, CARDS_AMOUNT_IN_MAIN_LIST, mainFilmsListContainer);
  renderShowMoreBtn(mainFilmsListContainer.parentNode);
};

const renderTopRatedList = (container, dataList) => {
  const getTopRatedFilmsList = () => {
    let topRatedFilmsList = dataList.slice();

    const sortFilmListByRating = dataList
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, CARDS_AMOUNT_IN_SUB_LISTS);

    if (dataList.every((film) => film.rating === dataList[0].rating)) {
      topRatedFilmsList = shuffleArray(topRatedFilmsList).slice(0, CARDS_AMOUNT_IN_SUB_LISTS);
    } else {
      topRatedFilmsList = sortFilmListByRating;
    }

    return topRatedFilmsList;
  };

  const topRatedFilmsList = getTopRatedFilmsList();

  if (topRatedFilmsList.every((film) => film.rating > 0)) {
    renderTemplate(
        container,
        filmListTemplate(topRatedSectionTitle, ``, `--extra`)
    );

    const topRatedContainer = findExtraContainerByName(topRatedSectionTitle, container).children[1];

    renderFilmCards(topRatedFilmsList, 0, topRatedFilmsList.length, topRatedContainer);
  }
};

const renderMostCommentedList = (container, dataList) => {
  const getMostCommentedFilmsList = () => {
    let mostCommentedFilmsList = dataList.slice();

    const sortFilmListByMostCommented = mostCommentedFilmsList
      .sort((a, b) => b.comments.length - a.comments.length)
      .slice(0, CARDS_AMOUNT_IN_SUB_LISTS);

    if (dataList.every((film) => film.comments.length === dataList[0].comments.length)) {
      mostCommentedFilmsList = shuffleArray(mostCommentedFilmsList).slice(0, CARDS_AMOUNT_IN_SUB_LISTS);
    } else {
      mostCommentedFilmsList = sortFilmListByMostCommented;
    }

    return mostCommentedFilmsList;
  };

  const mostCommentedFilmsList = getMostCommentedFilmsList();

  if (mostCommentedFilmsList.every((film) => film.comments.length > 0)) {
    renderTemplate(
        container,
        filmListTemplate(mostCommentedSectionTitle, ``, `--extra`)
    );

    const mostCommentedContainer = findExtraContainerByName(mostCommentedSectionTitle, container).children[1];

    renderFilmCards(mostCommentedFilmsList, 0, mostCommentedFilmsList.length, mostCommentedContainer);
  }
};

const renderFilmsLists = (container, filmsListData) => {
  renderTemplate(container, filmsSectionTemplate());

  const filmsListsContainer = document.querySelector(`.films`);

  renderMainList(filmsListsContainer, filmsListData);
  renderTopRatedList(filmsListsContainer, filmsListData);
  renderMostCommentedList(filmsListsContainer, filmsListData);
};

export {
  renderFilmsLists,
  CARDS_AMOUNT_IN_MAIN_LIST
};
