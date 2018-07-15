// @flow
import * as React from "react";
import type { Match } from "react-router-dom";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetList = styled.div`
  background-color: white;
`;

type Props = {
  match: Match
};

type State = {
  error: boolean,
  tweets: Array<Object>
};

class Posts extends React.Component<Props, State> {
  state = {
    error: false,
    tweets: []
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let userId: ?string = id;
    if (userId === null) userId = "1";
    if (userId === undefined) userId = "1";
    const env = process.env || {};
    const secretKey = env.REACT_APP_SECRET_KEY;
    if (!secretKey) throw new Error("missing API key");
    const url = `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}/statuses?access_token=${secretKey}`;
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
