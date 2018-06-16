import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import background from "./background.jpg";
import optiondots from "./optiondots.svg";

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.01px;
  color: #707e88;
`;

const LargeText = Text.extend`
  font-size: 20px;
`;

const ProfileHeader = styled.img`
  backface-visibility: hidden;
  background-width: 100%;
  will-change: transform;
  min-width: 100%;
`;

const ProfileInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 265px 1fr 1fr;
  min-height: 59px;
  position: relative;
  align-items: center;
`;

const ProfileBlock = styled.div``;

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
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 200px;
  justify-content: space-between;
  padding-left: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Follow = styled.button`
  padding: 9px 27px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  background-color: #ffffff;
  font-style: bold;

  &:hover {
    color: #ffffff;
    background-color: #1da1f2;
  }
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

export default () => (
  <header>
    <Navigation />
    <ProfileHeader alt="Profile Header" src={background} />
    <div className="container">
      <ProfileInfoContainer>
        <ProfileBlock>
          <AvatarLink to="/images">
            <Avatar src="img/big-avatar.png" />
          </AvatarLink>
        </ProfileBlock>
        <ProfileInfo>
          <Info>
            <Text>Tweets</Text>
            <LargeText>8,058</LargeText>
          </Info>
          <Info>
            <Text>Following</Text>
            <LargeText>721</LargeText>
          </Info>
          <Info>
            <Text>Followers</Text>
            <LargeText>1,815</LargeText>
          </Info>
          <Info>
            <Text>Likes</Text>
            <LargeText>460</LargeText>
          </Info>
          <Info>
            <Text>Lists</Text>
            <LargeText>2</LargeText>
          </Info>
        </ProfileInfo>
        <UserActions>
          <Follow>Follow</Follow>
          <Dropdown />
        </UserActions>
      </ProfileInfoContainer>
    </div>
  </header>
);
