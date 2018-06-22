import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import followericon from "./follower.svg";
import photovideo from "./photovideo.svg";
import MediaUnit from "./MediaUnit";
import FollowerUnit from "./FollowerUnit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const TitleIcon = styled.img`
  margin-right: 10px;
  min-width: 15px;
`;

const TitleText = styled.span`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: #1da1f2;
  border-bottom: 1px solid transparent;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 8px;
  display: flex;

  &:hover {
    ${TitleText} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Followers = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const PhotoVideoBox = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  padding: 0;
`;

export default () => (
  <Container>
    <Container>
      <TitleLink to="/followers">
        <TitleIcon src={followericon} alt="follower-icon" />
        <TitleText>6 followers you know</TitleText>
      </TitleLink>
      <Followers>
        <FollowerUnit
          to="/user1"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-1.png`}
          alt="avatar1"
        />
        <FollowerUnit
          to="/user2"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-2.png`}
          alt="avatar-2"
        />
        <FollowerUnit
          to="/user-3"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-3.png`}
          alt="avatar-3"
        />
        <FollowerUnit
          to="/user-4"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-4.png`}
          alt="avatar-4"
        />
        <FollowerUnit
          to="/user5"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-5.png`}
          alt="avatar-5"
        />
        <FollowerUnit
          to="/user6"
          src={`${process.env.PUBLIC_URL}/img/avatar-person-6.png`}
          alt="avatar-6"
        />
      </Followers>
    </Container>
    <Container>
      <TitleLink to="/photovideo">
        <TitleIcon src={photovideo} alt="Photo and video content" />
        <TitleText>522 Photos and videos</TitleText>
      </TitleLink>
      <PhotoVideoBox>
        <MediaUnit
          to="/photovideo1"
          src={`${process.env.PUBLIC_URL}/img/media-1.png`}
          alt="Photo or video"
        />
        <MediaUnit
          to="/photovideo2"
          src={`${process.env.PUBLIC_URL}/img/media-2.png`}
          alt="Photo or video"
        />
        <MediaUnit
          to="/photovideo3"
          src={`${process.env.PUBLIC_URL}/img/media-3.png`}
          alt="Photo or video"
        />
        <MediaUnit
          to="/photovideo4"
          src={`${process.env.PUBLIC_URL}/img/media-4.png`}
          alt="Photo or video"
        />
        <MediaUnit
          to="/photovideo5"
          src={`${process.env.PUBLIC_URL}/img/media-5.png`}
          alt="Photo or video"
        />
        <MediaUnit
          to="/photovideo6"
          src={`${process.env.PUBLIC_URL}/img/media-6.png`}
          alt="Photo or video"
        />
      </PhotoVideoBox>
    </Container>
  </Container>
);
