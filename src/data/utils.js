// @flow
import format from "date-fns/format";
import enLocale from "date-fns/locale/en";

type Props = {
  tag: string,
  tweets: number
};

export const linkFormat = ({ tag }: Props) => {
  if (tag.charAt(0) === "#") {
    return `/hashtag/${tag.slice(1).replace(" ", "_")}`;
  }
  return `/search?q="${tag.slice(1).replace(" ", "_")}"`;
};

export const statsFormat = ({ tweets }: Props) => {
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

export const dateFormat = type =>
  format(new Date(type), "Do MMMM YYYY", { locale: enLocale });
