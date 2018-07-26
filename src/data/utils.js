// @flow
import format from "date-fns/format";
import enLocale from "date-fns/locale/en";

export type AccountData = {
  id: string,
  username: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string
};

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

export const dateFormat = (type: string) =>
  format(new Date(type), "Do MMMM YYYY", { locale: enLocale });
