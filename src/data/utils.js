import users from "./users";

export const findUser = (user, param) => {
  try {
    return users.find(obj => obj.username === user)[param];
  } catch (e) {
    return "Error";
  }
};

export const linkFormat = ({ tag }) => {
  if (tag.charAt(0) === "#") {
    return `/hashtag/${tag.slice(1).replace(" ", "_")}`;
  }
  return `/search?q="${tag.slice(1).replace(" ", "_")}"`;
};

export const statsFormat = ({ tweets }) => {
  if (tweets === 1) {
    return `${tweets} Tweet`;
  }
  if (tweets >= 1000) {
    return `${(tweets / 1000).toFixed(3).replace(".", ",")} Tweets`;
  }
  if (tweets > 10000) {
    return `${(tweets / 1000).toFixed(1)}K Tweets`;
  }
  return tweets;
};
