import React from "react";
import { Link } from "react-router-dom";
import { FormattedNumber } from "react-intl";
import styled from "styled-components";
import trends from "../../data/trends";

const Headline = styled.span`
  color: #1da1f2;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

const Trend = styled.li``;

const Feed = styled.div`
  margin: 13px 0 0 0;
  padding: 0;
  list-style: none;
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

const Counter = Text.extend``;

export default function() {
  return (
    <React.Fragment>
      <Feed>
        {trends.map(trend => (
          <Trend key={trend.id}>
            <TrendLink to={`/search?q=${trend.tag}`}>
              <Headline>{trend.tag}</Headline>
              <Text>{trend.text}</Text>
              {trend.tweets > 0 && (
                <Counter>
                  <FormattedNumber value={trend.tweets} />
                  {trend.tweets > 1 ? " Tweets" : " Tweet"}
                </Counter>
              )}
            </TrendLink>
          </Trend>
        ))}
      </Feed>
    </React.Fragment>
  );
}
