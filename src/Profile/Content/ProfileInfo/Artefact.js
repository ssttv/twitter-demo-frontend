import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PhotoVideoLink = styled(Link)``;

const PhotoVideoList = styled.li`
  list-style: none;
  padding: 0;
  margin: 8px 0 0 8px;
`;

const PhotoVideo = styled.img`
  width: 83px;
  background-color: #66757f;
  border-radius: 4px;
`;

export default ({ to, src, alt }) => (
  <PhotoVideoList>
    <PhotoVideoLink to={to}>
      <PhotoVideo src={src} alt={alt} />
    </PhotoVideoLink>
  </PhotoVideoList>
);
