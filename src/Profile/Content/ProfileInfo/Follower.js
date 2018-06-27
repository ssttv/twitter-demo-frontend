import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Follower = styled.li`
  list-style: none;
  margin: 8px 0 0 8px;
`;

const FollowerLink = styled(Link)``;

const Avatar = styled.img`
  width: 43px;
  background-color: #66757f;
`;

export default ({ to, src, alt }) => (
  <Follower>
    <FollowerLink to={to}>
      <Avatar src={src} alt={alt} />
    </FollowerLink>
  </Follower>
);
