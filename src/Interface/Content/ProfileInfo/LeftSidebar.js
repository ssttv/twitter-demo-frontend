import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import followericon from "./follower.svg";
import photovideo from "./photovideo.svg";

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

const Follower = styled.li`
  list-style: none;
  margin: 8px 0 0 8px;
`;

const FollowerLink = styled(Link)``;

const PhotoVideoLink = styled(Link)``;

const Avatar = styled.img`
  width: 43px;
  background-color: #66757f;
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

export default () => (
  <Container>
    <Container>
      <TitleLink to="/followers">
        <TitleIcon src={followericon} alt="follower-icon" />
        <TitleText>6 followers you know</TitleText>
      </TitleLink>
      <Followers>
        <Follower>
          <FollowerLink to="/name1">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-1.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
        <Follower>
          <FollowerLink to="/name2">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-2.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
        <Follower>
          <FollowerLink to="/name3">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-3.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
        <Follower>
          <FollowerLink to="/name4">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-4.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
        <Follower>
          <FollowerLink to="/name5">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-5.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
        <Follower>
          <FollowerLink to="/name6">
            <Avatar
              src={`${process.env.PUBLIC_URL}/img/avatar-person-6.png`}
              alt="avatar"
            />
          </FollowerLink>
        </Follower>
      </Followers>
    </Container>
    <Container>
      <TitleLink to="/photovideo">
        <TitleIcon src={photovideo} alt="Photo and video content" />
        <TitleText>522 Photos and videos</TitleText>
      </TitleLink>
      <PhotoVideoBox>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo1">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-1.png`}
              alt="Photo or video"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo2">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-2.png`}
              alt="Photo or video"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo3">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-3.png`}
              alt="Photo or video"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo4">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-4.png`}
              alt="Photo or video"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo5">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-5.png`}
              alt="Photo or video"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
        <PhotoVideoList>
          <PhotoVideoLink to="/photovideo6">
            <PhotoVideo
              src={`${process.env.PUBLIC_URL}/img/media-6.png`}
              alt="media"
            />
          </PhotoVideoLink>
        </PhotoVideoList>
      </PhotoVideoBox>
    </Container>
  </Container>
);
