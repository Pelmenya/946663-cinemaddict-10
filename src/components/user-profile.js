import {util} from './../util';

const getUserProfileTemplate = (rank, avatar) =>
  `<section class="header__profile profile">
    <p class="profile__rating">${rank}</p>
    <img class="profile__avatar" src="${avatar}" alt="Avatar" width="35" height="35">
  </section>`;

export default class UserProfile {
  constructor(generatedUserProfile) {
    this._element = null;

    this.userRank = generatedUserProfile.rank;
    this.userAvatar = generatedUserProfile.avatar;
    this.viewedMoviesCount = generatedUserProfile.viewedMoviesCount;
  }

  getTemplate() {
    return getUserProfileTemplate(this.userRank, this.userAvatar);
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
