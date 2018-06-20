import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import followericon from "./follower.svg";

const SharedFollowers = styled.div`
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

const Avatar = styled.img`
  width: 43px;
  background-color: #66757f;
`;

export default () => (
  <SharedFollowers>
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
  </SharedFollowers>
);
