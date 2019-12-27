import AbstractComponent from './absctract';

const getUserProfileTemplate = (rank, avatar) =>
  `<section class="header__profile profile">
    <p class="profile__rating">${rank}</p>
    <img
      class="profile__avatar"
      src="${avatar}"
      alt="Avatar"
      width="35"
      height="35"
    >
  </section>`;

export default class UserProfile extends AbstractComponent {
  constructor(generatedUserProfile) {
    super();

    this._userRank = generatedUserProfile.rank;
    this._userAvatar = generatedUserProfile.avatar;
    this._viewedMoviesCount = generatedUserProfile.viewedMoviesCount;
  }

  getTemplate() {
    return getUserProfileTemplate(this._userRank, this._userAvatar);
  }
}
