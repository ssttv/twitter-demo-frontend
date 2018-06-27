import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Count = styled(Text)``;

export const trends = [
  {
    id: 1,
    tag: '#BringYourDogToWorkDay',
    text: null,
    tweets: null,
  },
  {
    id: 2,
    tag: '#FridayFeeling',
    text: null,
    tweets: 12100,
  },
  {
    id: 3,
    tag: '#BrexitAnniversary',
    text: 'It’s one year since the UK voted to leave the European Union',
    tweets: null,
  },
  {
    id: 4,
    tag: 'HMS Queen Elizabeth',
    text: null,
    count: 1036,
  },
  {
    id: 5,
    tag: 'Joe Budden',
    text: null,
    count: 1036,
  },
  {
    id: 6,
    tag: 'Trident',
    text: null,
    tweets: 6136,
  },
];

export default function() {
  /* Simplified for mapping below

  const linkFormat = () => {
     if (tag.charAt(0) === '#') {
      return `/hashtag/${tag.slice(1).replace(' ', '_')}`;
    }
    return `/search?q="${tag.slice(1).replace(' ', '_')}"`;
  };

  const statsFormat = () => {
    if (tweets === 1) {
      return `${tweets} Tweet`;
    }
    if (tweets >= 1000) {
      return `${(tweets / 1000).toFixed(3).replace('.', ',')} Tweets`;
    }
    if (tweets > 10000) {
      return `${(tweets / 1000).toFixed(1)}K Tweets`;
    }
    return tweets;
  };
  */

  return (
    <React.Fragment>
      <Feed>
        {trends.map(trend => (
          <Trend key={trend.id}>
            <TrendLink to={`/search?q=${trend.to}`}>
              <Headline>{trend.tag}</Headline>
              <Text>{trend.text}</Text>
              {trend.tweets > 0 && (
                <Count>{trend.tweets > 1 ? ' Tweets' : ' Tweet'}</Count>
              )}
            </TrendLink>
          </Trend>
        ))}
      </Feed>
    </React.Fragment>
  );
}
