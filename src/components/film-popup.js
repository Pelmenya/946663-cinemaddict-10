import {renderTemplate} from './../main';
import {generateFilmPopup} from './../mock/film-popup';
import {getRandomElementInArray} from './../util';
import {renderComments} from './user-comments';

const filmPopupTemplate = (filmPopup) => `
<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${filmPopup.posterUrl}" alt="">
          <p class="film-details__age">${filmPopup.ageСategory}</p>
        </div>
      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${filmPopup.title}</h3>
            <p class="film-details__title-original">${filmPopup.titleOriginal}</p>
          </div>
          <div class="film-details__rating">
            <p class="film-details__total-rating">${filmPopup.rating}</p>
          </div>
        </div>
        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${filmPopup.director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${filmPopup.writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${filmPopup.actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${filmPopup.releaseDate}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${filmPopup.runtime}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${filmPopup.country}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              <span class="film-details__genre">${filmPopup.genres[0]}</span>
              <span class="film-details__genre">${filmPopup.genres[1]}</span>
              <span class="film-details__genre">${filmPopup.genres[2]}</span>
            </td>
          </tr>
        </table>
        <p class="film-details__film-description">
          ${filmPopup.description}
        </p>
      </div>
    </div>
    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">
        Add to watchlist
      </label>
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
      <label for="watched" class="film-details__control-label film-details__control-label--watched">
        Already watched
      </label>
      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">
        Add to favorites
      </label>
    </section>
  </div>
  <div class="form-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">
        Comments
        <span class="film-details__comments-count">
          ${filmPopup.comments.length}
        </span>
      </h3>
      <ul class="film-details__comments-list"></ul>
      <div class="film-details__new-comment">
        <div for="add-emoji" class="film-details__add-emoji-label"></div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
        </label>
        <div class="film-details__emoji-list">
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
          <label class="film-details__emoji-label" for="emoji-smile">
            <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
          </label>
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
          <label class="film-details__emoji-label" for="emoji-sleeping">
            <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
          </label>
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
          <label class="film-details__emoji-label" for="emoji-gpuke">
            <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
          </label>
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
          <label class="film-details__emoji-label" for="emoji-angry">
            <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
          </label>
        </div>
      </div>
    </section>
  </div>
</form>
</section>`;

//  Описываем логику закрытия попапа
const addClosePopupLogic = (popupContainer, closeElement) => {
  const onClosePopupBtnClick = () => {
    popupContainer.classList.add(`visually-hidden`);
    closeElement.removeEventListener(`click`, onClosePopupBtnClick);
  };

  closeElement.addEventListener(`click`, onClosePopupBtnClick);
};

const renderPopup = (container, filmsList) => {
  const randomFilmData = getRandomElementInArray(filmsList);
  const popupData = generateFilmPopup(randomFilmData);

  renderTemplate(container, filmPopupTemplate(popupData));

  const popupContainer = document.querySelector(`.film-details`);
  const closePopupBtn = popupContainer.querySelector(`.film-details__close-btn`);
  const popupCommentListContainer = popupContainer.querySelector(`.film-details__comments-list`);

  addClosePopupLogic(popupContainer, closePopupBtn);
  renderComments(popupData, popupCommentListContainer);
};

export {
  renderPopup,
};
