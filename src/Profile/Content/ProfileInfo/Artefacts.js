import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./Title";
import photovideo from "./photovideo.svg";
import artefacts from "../../../data/artefacts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

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

export default () => (
  <Container>
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
  </Container>
);
