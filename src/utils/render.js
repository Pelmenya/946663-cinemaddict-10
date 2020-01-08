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
    cardListContainer,
    lastRenderIndex = cardsComponents.length
) => {
  //  Находим контейнер для отрисовки
  let container = cardListContainer
    .querySelector(`.films-list__container`);

  //  Находим индексы уже отрисованных карточек
  let cardsOnPageIndices = Array.from(document.querySelectorAll(`.film-card`))
    .map((card) => card.dataset.id);

  for (let i = 0; i < lastRenderIndex; i++) {
    if (cardsOnPageIndices
      .some((cardIndex) => cardIndex ===
        cardsComponents[i].getElement().dataset.id)
    ) {
      const cardCopy = new FilmCard(cardsComponents[i].filmCardData);

      cardCopy.getElement().dataset.copy = ``;
      renderElement(container, cardCopy);
    } else {
      renderElement(container, cardsComponents[i]);
    }
  }
};


export {
  renderElement,
  renderFilmsCards
};
