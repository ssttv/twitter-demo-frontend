// @flow
import * as React from "react";
import type { Match } from "react-router-dom";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetList = styled.div`
  background-color: white;
`;

/*
const REACT_APP_SECRET_KEY: string =
  process.env.REACT_APP_SECRET_KEY != null
    ? process.env.REACT_APP_SECRET_KEY
    : "";
*/

type Props = {
  id: number | string,
  match: Match
};

type State = {
  error: boolean,
  tweets: Array<Object>
};

class Posts extends React.Component<Props, State> {
  /*
  constructor(match: any) {
    super(match);
    this.id = match.url;
    console.log(match.url);
  }
  */

  state = {
    error: false,
    tweets: []
  };

  componentDidMount() {
    const env = process.env || {};
    const secretKey = env.REACT_APP_SECRET_KEY;
    if (!secretKey) throw new Error("missing API key");
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${1}/statuses?access_token=${secretKey}`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            tweets: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, tweets } = this.state;
    if (error) {
      return <h3>Error rendering tweets</h3>;
    }

    return (
      <TweetList>
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            pinned={tweet.pinned}
            avatar={tweet.account.avatar_static}
            personNick={tweet.account.username}
            person={tweet.account.display_name}
            uri={tweet.uri}
            date={tweet.created_at}
            content={tweet.content}
            media={tweet.media_attachments}
            comments={tweet.comments}
            retweets={tweet.reblogs_count}
            likes={tweet.favourites_count}
            messages={tweet.messages}
            activeLike={tweet.activeLike}
          />
        ))}
      </TweetList>
    );
  }
}

export default Posts;
