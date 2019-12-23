import {util} from './../util';

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

export default class UserProfile {
  constructor(generatedUserProfile) {
    this._element = null;

    this._userRank = generatedUserProfile.rank;
    this._userAvatar = generatedUserProfile.avatar;
    this._viewedMoviesCount = generatedUserProfile.viewedMoviesCount;
  }

  getTemplate() {
    return getUserProfileTemplate(this._userRank, this._userAvatar);
  }

  getElement() {
    if (!this._element) {
      this._element = util.createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
