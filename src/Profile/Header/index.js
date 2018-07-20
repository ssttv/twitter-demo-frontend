// @flow
import React from "react";
import styled from "styled-components";
import { Link, Route, withRouter } from "react-router-dom";
import type { Match } from "react-router-dom";
import Counters from "./Counters";
import Button from "../../UI/Button";
import optiondots from "./icons/optiondots.svg";

const ProfileHeader = styled.img`
  backface-visibility: hidden;
  height: 100%;
  max-height: 600px;
  width: 100%;
  min-width: 100%;
  will-change: transform;
  object-fit: cover;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row
  min-height: 59px;
  position: relative;
  align-items: center;
`;

const ProfileBlock = styled.div`
  max-width: 265px;
  padding: 0 0 0 12px;
  width: 100%;
`;

const AvatarLink = styled(Link)`
  position: absolute;
  border-radius: 100px;
  width: 207px;
  height: 207px;
  left: 0;
  top: -120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 200px;
  height: auto;
`;

/*
const Avatar = styled.img`
  border-radius: 100px;
  width: 83%;
  height: 83%;
  boder: 1px solid gainsboro;
`;
*/

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const FollowButton = styled(Button)`
  padding: 9px 27px;
`;

const Dropdown = styled.div`
  height: 14px;
  width: 4px;
  margin-left: 18px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  &:before {
    content: "";
    background-image: url(${optiondots});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
type Props = {
  match: Match,
  background: string,
  avatar: string
};

export default withRouter(({ match, background, avatar }: Props) => (
  <React.Fragment>
    <ProfileHeader alt="Profile Header" src={background} />
    <div className="container">
      <ProfileInfoContainer>
        <div className="col-xs-3">
          <ProfileBlock>
            <AvatarLink to={match.url}>
              <Avatar src={avatar} />
            </AvatarLink>
          </ProfileBlock>
        </div>
        <div className="col-xs-6">
          <Route component={Counters} />
        </div>
        <div className="col-xs-3">
          <UserActions>
            <FollowButton primary>Follow</FollowButton>
            <Dropdown />
          </UserActions>
        </div>
      </ProfileInfoContainer>
    </div>
  </React.Fragment>
));
