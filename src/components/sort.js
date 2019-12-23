import {util} from './../util';

const getSortTemplate = () =>
  `<ul class="sort">
    <li>
      <a href="#" class="sort__button sort__button--active">
        Sort by default
      </a>
    </li>
    <li>
      <a href="#" class="sort__button">
        Sort by date
      </a>
    </li>
    <li>
      <a href="#" class="sort__button">
        Sort by rating
      </a>
    </li>
  </ul>`;

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getSortTemplate();
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
