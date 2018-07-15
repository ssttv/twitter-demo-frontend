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

type tweet = {
  id: number | string,
  pinned: boolean,
  account: {
    avatar_static: string,
    username: string,
    display_name: string
  },
  uri: string,
  created_at: string,
  content: string,
  media_attachments: Object,
  comments: number,
  reblogs_count: number,
  favourites_count: number,
  messages: number,
  favourited: boolean
};

type State = {
  error: boolean,
  tweets: Array<tweet>
};

class Posts extends React.Component<Props, State> {
  state = {
    error: false,
    tweets: []
  };

  componentDidMount() {
    const {
      match: { url }
    } = this.props;
    let userId: ?string = url.slice(1);
    const errorWatchdog: string = "1";
    if (userId === null || userId === undefined) userId = errorWatchdog;
    const env = process.env || {};
    const secretKey = env.REACT_APP_SECRET_KEY;
    if (!secretKey) throw new Error("missing API key");
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${userId}/statuses?access_token=${secretKey}`
    )
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
        {tweets.map(post => (
          <Tweet
            key={post.id}
            id={post.id}
            pinned={post.pinned}
            avatar={post.account.avatar_static}
            personNick={post.account.username}
            person={post.account.display_name}
            uri={post.uri}
            date={post.created_at}
            content={post.content}
            media={post.media_attachments}
            comments={post.comments}
            retweets={post.reblogs_count}
            likes={post.favourites_count}
            messages={post.messages}
            activeLike={post.favourited}
          />
        ))}
      </TweetList>
    );
  }
}

export default Posts;
