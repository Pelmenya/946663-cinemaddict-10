import {renderTemplate} from './../main';

const commentTemplate = (popupData, commentId) => {
  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${popupData.comments[commentId].commentEmojiURL}" width="55" height="55" alt="emoji">
  </span>
  <div>
    <p class="film-details__comment-text">
      ${popupData.comments[commentId].commentText}
    </p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">
        ${popupData.comments[commentId].commentAuthor}
      </span>
      <span class="film-details__comment-day">
        ${popupData.comments[commentId].commentDay}
      </span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`;
};

const renderComments = (popupData, container) => {
  for (let i = 0; i < popupData.comments.length; i++) {
    renderTemplate(container, commentTemplate(popupData, i));
  }
};

export {
  commentTemplate,
  renderComments
};
