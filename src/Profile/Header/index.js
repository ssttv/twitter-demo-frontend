import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Counter from './Counter';
import Navigation from './Navigation';
import Button from '../../UI/Button';
import background from './background.jpg';
import optiondots from './optiondots.svg';

const ProfileHeader = styled.img`
  backface-visibility: hidden;
  width: 100%;
  object-fit: cover;
  will-change: transform;
  min-width: 100%;
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
  width: 83%;
  height: 83%;
  boder: 1px solid gainsboro;
`;

const Statistics = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 0px;
`;

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
    content: '';
    background-image: url(${optiondots});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default () => (
  <header>
    <Navigation />
    <ProfileHeader alt="Profile Header" src={background} />
    <div className="container">
      <ProfileInfoContainer>
        <div className="col-xs-3">
          <ProfileBlock>
            <AvatarLink to="/images">
              <Avatar src="img/avatar-max.png" />
            </AvatarLink>
          </ProfileBlock>
        </div>
        <div className="col-xs-6">
          <Statistics>
            <Counter link="/EveryInteract" text="Tweets" count={8058} />
            <Counter link="/following" text="Following" count={721} />
            <Counter link="/followers" text="Followers" count={1815} />
            <Counter link="/likes" text="Likes" count={460} />
            <Counter link="/lists" text="Lists" count={2} />
          </Statistics>
        </div>
        <div className="col-xs-3">
          <UserActions>
            <FollowButton primary>Follow</FollowButton>
            <Dropdown />
          </UserActions>
        </div>
      </ProfileInfoContainer>
    </div>
  </header>
);
