import {getRenderCardsList} from './utils/util';
import {renderFilmsCards} from './utils/render';

export default class PageController {
  constructor(
      container,
      filmsCardsList,
      mainFilmsList,
      topRatedFilmsList,
      mostCommentedFilmsList,
      cardsAmountInMainList,
      cardsAmountInSubLists
  ) {
    this._container = container;
    this._filmsCardsList = filmsCardsList;
    this._mainFilmsListComponent = mainFilmsList;
    this._topRatedFilmsListComponent = topRatedFilmsList;
    this._mostCommentedFilmsListComponent = mostCommentedFilmsList;
    this._cardsAmountInMainList = cardsAmountInMainList;
    this._cardsAmountInSubLists = cardsAmountInSubLists;
  }

  render() {
    renderFilmsCards(
        this._filmsCardsList,
        this._mainFilmsListComponent,
        this._cardsAmountInMainList
    );

    renderFilmsCards(
        getRenderCardsList(
            this._filmsCardsList,
            `topRated`,
            this._cardsAmountInSubLists
        ),
        this._topRatedFilmsListComponent
    );

    renderFilmsCards(
        getRenderCardsList(
            this._filmsCardsList,
            `mostCommented`,
            this._cardsAmountInSubLists
        ),
        this._mostCommentedFilmsListComponent
    );
  }

  // addOpenCardPopupLogic() {
  //   const onOpeningPopupElementsClick = (evt) => {
  //     evt.preventDefault();

  //     renderElement(
  //         document.querySelector(`.main`),
  //         this._cardPopup
  //     );
  //   };

  //   for (let element of this.getOpeningPopupElements()) {
  //     element.addEventListener(
  //         `click`,
  //         onOpeningPopupElementsClick
  //     );
  //   }
  // }
}
