import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import home from "./home.svg";
import moments from "./moments.svg";
import notifications from "./notifications.svg";
import messages from "./messages.svg";
import twitterLogo from "./twitter.svg";
import search from "./search.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
`;

const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #667580;
  text-decoration: none;
  padding-bottom: 10px;
  padding-top: 4px;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #1da1f2;
    transition: all 0.1s ease-in-out;
  }
`;

const CrumbText = styled.span`
  padding-left: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
`;

const CrumbIcon = styled.img``;

const Moments = Home.extend``;

const Notifications = Home.extend``;

const Messages = Home.extend``;

const TwitterLogo = styled.img`
  min-height: 17px;
`;

const ActionsContainer = styled.div`
  display: flex;
  min-width: 390px;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.form``;

const SearchInput = styled.input`
  border-radius: 100px;
  border: none;
  border: 1px solid #e6ecf0;
  background-color: #f5f8fa;
  padding-left: 11px;
  padding-right: 10px;
  padding-top: 9px;
  padding-bottom: 8px;
  min-width: 220px;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;

  &:focus {
    border: 2px solid #1da1f2;
    outline: none;
  }
`;

const SearchBtn = styled.img`
  src: url(${search});
  border: none;
  cursor: pointer;
  margin: 4px 10px -4px -26px;
  height: 18px;
  width: 18px;
  background-color: #f5f8fa;
`;

const AvatarLink = styled(Link)`
  width: 30px;
  height: 30px;
  border-color: transparent;

  &:hover {
    border: 1px solid black;
    border-radius: 100px;
    transition: all 0.1s ease-in-out;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const Tweet = styled.button`
  padding: 9px 14px;
  border-radius: 100px;
  border-style: none;
  border-color: #1da1f2;
  background-color: #1da1f2;
  color: white;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.01px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export default () => (
  <div className="container">
    <Nav>
      <BreadCrumbs>
        <Home>
          <CrumbIcon alt="Home" src={home} />
          <CrumbText>Home</CrumbText>
        </Home>
        <Moments>
          <CrumbIcon alt="Moments" src={moments} />
          <CrumbText>Moments</CrumbText>
        </Moments>
        <Notifications>
          <CrumbIcon alt="Notifications" src={notifications} />
          <CrumbText>Notifications</CrumbText>
        </Notifications>
        <Messages>
          <CrumbIcon alt="Messages" src={messages} />
          <CrumbText>Messages</CrumbText>
        </Messages>
      </BreadCrumbs>
      <TwitterLogo alt="Twitter Logo" src={twitterLogo} />
      <ActionsContainer>
        <Search action="/search">
          <SearchInput
            type="text"
            id="search-input"
            placeholder="Search Twitter"
          />
          <SearchBtn alt="search-icon" src={search} />
        </Search>
        <AvatarLink to="/EveryInteract">
          <Avatar src="/img/avatar-min.png" />
        </AvatarLink>
        <Tweet>Tweet</Tweet>
      </ActionsContainer>
    </Nav>
  </div>
);
