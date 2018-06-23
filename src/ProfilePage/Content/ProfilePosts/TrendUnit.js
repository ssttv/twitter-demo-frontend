import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hashtag = styled.span`
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
    ${Hashtag} {
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

export default ({ to, tag, text, number }) => (
  <TrendLink to={to}>
    <Hashtag>{tag}</Hashtag>
    <Text>{text}</Text>
    <Count>
      {number > 10000 ? `${number / 1000}K Tweets` : `${number} Tweets`}
    </Count>
  </TrendLink>
);
