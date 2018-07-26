// @flow
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import type { Match, Location } from "react-router-dom";
import type { AccountData } from "../../../data/utils";
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

const isMainNavActive = (match: Match, location: Location) => {
  const matches = [
    `${match.url}`,
    `${match.url}/with-replies`,
    `${match.url}/media`
  ];
  return matches.some(el => el === (location && location.pathname));
};

type Props = {
  match: Match,
  userInfo: AccountData
};

const Counters = ({ match, userInfo }: Props) => (
  <List>
    <Counter
      url={match.url}
      active={isMainNavActive}
      to=""
      text="Tweets"
      count={userInfo.statuses_count}
    />
    <Counter
      url={match.url}
      to="/following"
      text="Following"
      count={userInfo.following_count}
    />
    <Counter
      url={match.url}
      to="/followers"
      text="Followers"
      count={userInfo.followers_count}
    />
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

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(Counters);
