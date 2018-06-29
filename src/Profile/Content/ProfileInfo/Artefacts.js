import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./Title";
import photovideo from "./photovideo.svg";

const PhotoVideoLink = styled(Link)``;

const PhotoVideoBox = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const PhotoVideoList = styled.li`
  list-style: none;
  padding: 0;
  margin: 5px 0 0 5px;
  cursor: pointer;
`;

const PhotoVideo = styled.img`
  width: 83px;
  background-color: #66757f;
  border-radius: 4px;
  user-select: none;

  &:hover {
    border: 0 1px 2px 0 black;
  }
`;

const publicURL = process.env.PUBLIC_URL;

const artefacts = [
  {
    id: 1,
    src: `${publicURL}/img/media-1.png`,
    to: "/media_1"
  },
  {
    id: 2,
    src: `${publicURL}/img/media-2.png`,
    to: "/media-2"
  },
  {
    id: 3,
    src: `${publicURL}/img/media-3.png`,
    to: "/media-3"
  },
  {
    id: 4,
    src: `${publicURL}/img/media-4.png`,
    to: "/media-4"
  },
  {
    id: 5,
    src: `${publicURL}/img/media-5.png`,
    to: "/media-5"
  },
  {
    id: 6,
    src: `${publicURL}/img/media-6.png`,
    to: "/media-6"
  }
];

export default () => (
  <React.Fragment>
    <Title to="/media" src={photovideo} alt="media icon">
      522 Photos and videos
    </Title>
    <PhotoVideoBox>
      {artefacts.map(artefact => (
        <PhotoVideoList key={artefact.id}>
          <PhotoVideoLink to={artefact.to}>
            <PhotoVideo src={artefact.src} alt={artefact.alt} />
          </PhotoVideoLink>
        </PhotoVideoList>
      ))}
    </PhotoVideoBox>
  </React.Fragment>
);
