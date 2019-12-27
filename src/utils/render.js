import {RenderPosition} from './../constans';
import FilmCard from './../components/film-card';

const renderElement = (container, component, place = RenderPosition.BEFOREEND) => {
  const componentElement = component.getElement();

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(componentElement);
      break;
    case RenderPosition.BEFOREEND:
      container.append(componentElement);
      break;
  }
};

const renderFilmsCards = (
    cardsComponents,
    cardList,
    lastRenderIndex = cardsComponents.length
) => {
  let container = cardList.getElement()
    .querySelector(`.films-list__container`);
  let cardsOnPageIndices = Array.from(document.querySelectorAll(`.film-card`))
    .map((card) => card.dataset.id);

  for (let i = 0; i < lastRenderIndex; i++) {
    if (cardsOnPageIndices
      .some((cardIndex) => cardIndex ===
        cardsComponents[i].getElement().dataset.id)
    ) {
      let cardCopy = Object.assign({}, cardsComponents[i]);
      cardCopy.prototype = FilmCard.prototype;
      console.log(cardCopy.prototype.getTemplate());
      renderElement(container, cardCopy.prototype);
    } else {
      renderElement(container, cardsComponents[i]);
    }
  }
};


export {
  renderElement,
  renderFilmsCards
};
