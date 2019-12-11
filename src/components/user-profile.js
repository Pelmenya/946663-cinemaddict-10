export const userProfileTemplate = (userProfile) => `
<section class="header__profile profile">
  <p class="profile__rating">${userProfile.rank}</p>
  <img class="profile__avatar" src="${userProfile.avatar}" alt="Avatar" width="35" height="35">
</section>`;
