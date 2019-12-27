import {getRandomNumber} from './../utils/util';

const VIEWED_MOVIES = 22;

class RankRerequirement {
  constructor(minViews, maxViews) {
    this.minViews = minViews;
    this.maxViews = maxViews;
  }
}

const Ranks = {
  'novice': {
    requirements: new RankRerequirement(1, 10),
  },

  'fan': {
    requirements: new RankRerequirement(11, 20),
  },

  'movie buff': {
    requirements: new RankRerequirement(21, Infinity),
  }
};

const getUserRank = (viewedMoviesCount) => {
  let userRank = ``;

  for (let key in Ranks) {
    if (
      viewedMoviesCount >= Ranks[key].requirements.minViews &&
      viewedMoviesCount <= Ranks[key].requirements.maxViews
    ) {
      userRank = key;
    }
  }

  return userRank;
};

const generateUserProfile =
  (viewedMoviesCount = getRandomNumber(VIEWED_MOVIES)) => {
    const userProfile = {
      viewedMoviesCount,
      avatar: `./images/bitmap@2x.png`,
      rank: getUserRank(viewedMoviesCount)
    };

    return userProfile;
  };

export {
  generateUserProfile
};
