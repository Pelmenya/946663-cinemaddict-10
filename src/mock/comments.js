import {
  getRandomElementInArray,
  getRandomDate,
  getRandomNumber,
} from './../util';

const COMMENTS_COUNT = 10;

const EmojiTitles = [
  `angry`,
  `puke`,
  `sleeping`,
  `smile`,
  `trophy`
];

const commentsText = [
  `wow`,
  `amazing`,
  `perfectly`,
  `what is it?`
];

const authorsList = [
  `first some author`,
  `second some author`,
  `third some author`,
  `fourth some author`
];

const Comment = function () {
  this.commentEmojiURL =
    `./images/emoji/${getRandomElementInArray(EmojiTitles)}.png`;

  this.commentText = `${getRandomElementInArray(commentsText)}`;
  this.commentAuthor = `${getRandomElementInArray(authorsList)}`;
  this.commentDay = `${getRandomDate().getFullYear()}/${getRandomDate().getMonth()}/${getRandomDate().getDate()} ${getRandomDate().getHours()}:${getRandomDate().getMinutes()}`;
};

const generateCommentsList = () => {
  let commentsList = [];

  for (let i = 0; i < getRandomNumber(COMMENTS_COUNT); i++) {
    commentsList.push(new Comment());
  }

  return commentsList;
};

export {
  generateCommentsList
};
