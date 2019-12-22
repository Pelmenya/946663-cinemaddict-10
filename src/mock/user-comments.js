import {util} from './../util';

const COMMENTS_COUNT = 10;

const emojiTitles = [
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
    `./images/emoji/${util.getRandomElementInArray(emojiTitles)}.png`;

  this.commentText = `${util.getRandomElementInArray(commentsText)}`;
  this.commentAuthor = `${util.getRandomElementInArray(authorsList)}`;
  this.commentDay = `${util.getRandomDate().getFullYear()}/${util.getRandomDate().getMonth()}/${util.getRandomDate().getDate()} ${util.getRandomDate().getHours()}:${util.getRandomDate().getMinutes()}`;
};

const generateCommentsList = () => {
  let commentsList = [];

  for (let i = 0; i < util.getRandomNumber(COMMENTS_COUNT); i++) {
    commentsList.push(new Comment());
  }

  return commentsList;
};

export {
  generateCommentsList
};
