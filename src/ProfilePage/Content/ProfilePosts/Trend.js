import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headline = styled.span`
  color: #1da1f2;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

const TrendLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding-bottom: 10px;
  min-height: 20px;

  &:hover {
    ${Headline} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: #697787;
`;

const Count = styled(Text)``;

export default function(props) {
  const { tag, tweets } = props;

  const linkFormat = () => {
    if (tag.charAt(0) === "#") {
      return `/hashtag/${tag.slice(1).replace(" ", "_")}`;
    }
    return `/search?q="${tag.slice(1).replace(" ", "_")}"`;
  };

  const statsFormat = () => {
    if (tweets > 10000) {
      return `${(tweets / 1000).toFixed(1)}K`;
    } else if (tweets => 1000) {
      return (tweets / 1000).toFixed(3).replace(".", ",");
    }
    return tweets;
  };

  return (
    <TrendLink to={linkFormat()}>
      <Headline>{props.tag}</Headline>
      <Text>{props.text}</Text>
      {tweets > 0 && <Count>{statsFormat()} Tweets</Count>}
    </TrendLink>
  );
}
