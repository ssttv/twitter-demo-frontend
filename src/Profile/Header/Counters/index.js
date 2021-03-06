// @flow
import React from "react";
import styled from "styled-components";
import type { Match } from "react-router-dom";
import Counter from "./Counter";

const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 5px;
`;

const isMainNavActive = (match: Object, location: Object) => {
  const matches = [
    `${match.url}`,
    `${match.url}/with-replies`,
    `${match.url}/media`
  ];
  return matches.some(el => el === (location && location.pathname));
};

type Props = {
  match: Match
};

export default ({ match }: Props) => (
  <List>
    <Counter
      url={match.url}
      active={isMainNavActive}
      to=""
      text="Tweets"
      count={8058}
    />
    <Counter url={match.url} to="/following" text="Following" count={721} />
    <Counter url={match.url} to="/followers" text="Followers" count={1815} />
    <Counter url={match.url} to="/likes" text="Likes" count={460} />
    <Counter
      url={match.url}
      to="/lists"
      text="Lists"
      count={2}
      active={isMainNavActive.output}
    />
  </List>
);
