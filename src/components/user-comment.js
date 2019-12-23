import {util} from './../util';

const getCommentTemplate = (
    userName,
    commentDay,
    commentText,
    commentEmojiURL
) =>
  `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="${commentEmojiURL}" width="55" height="55" alt="emoji">
    </span>
    <div>
      <p class="film-details__comment-text">
        ${commentText}
      </p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">
          ${userName}
        </span>
        <span class="film-details__comment-day">
          ${commentDay}
        </span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;

export default class UserComment {
  constructor(popupData, commentId) {
    this._element = null;

    this._comment = popupData.comments[commentId];
    this._userName = this._comment.commentAuthor;
    this._commentText = this._comment.commentText;
    this._commentDay = this._comment.commentDay;
    this._commentEmojiURL = this._comment.commentEmojiURL;
  }

  getTemplate() {
    return getCommentTemplate(
        this._userName,
        this._commentDay,
        this._commentText,
        this._commentEmojiURL
    );
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
