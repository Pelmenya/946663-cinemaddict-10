
export const generateFooterStatisticTemplate = (numberOfFilms) => {
  const statisticDescription = numberOfFilms === 1 ? `movie inside` : `movies inside`;

  const statisticTemplate = `
    <section class="footer__statistics">
      <p>${numberOfFilms} ${statisticDescription}</p>
    </section>`;

  return statisticTemplate;
};
