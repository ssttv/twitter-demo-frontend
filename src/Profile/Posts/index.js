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
  activeLike: boolean
};

type State = {
  error: boolean,
  tweets: Array<tweet>
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
        {tweets.map(unit => (
          <Tweet
            key={unit.id}
            id={unit.id}
            pinned={unit.pinned}
            avatar={unit.account.avatar_static}
            personNick={unit.account.username}
            person={unit.account.display_name}
            uri={unit.uri}
            date={unit.created_at}
            content={unit.content}
            media={unit.media_attachments}
            comments={unit.comments}
            retweets={unit.reblogs_count}
            likes={unit.favourites_count}
            messages={unit.messages}
            activeLike={unit.activeLike}
          />
        ))}
      </TweetList>
    );
  }
}

export default Posts;
