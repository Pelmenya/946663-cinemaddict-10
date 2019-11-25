export const filmListTemplate = (listName, hiddenState = ``, listModifier = ``) => `
<section class="films-list${listModifier}">
  <h2 class="films-list__title ${hiddenState}">${listName}</h2>
  <div class="films-list__container"></div>
</section>`;
