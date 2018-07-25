// @flow
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import userInfoFetchData from "../complexes/actions";
import home from "./icons/home.svg";
import moments from "./icons/moments.svg";
import notifications from "./icons/notifications.svg";
import messages from "./icons/messages.svg";
import twitterLogo from "./icons/twitter.svg";
import search from "./icons/search.svg";
import Crumb from "./Crumb";

const Block = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid lightgrey;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BreadCrumbs = styled.ul`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

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
  margin-right: 10px;
  margin-left: -26px;
  margin-top: 4px;
  margin-bottom: -4px;
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

const Header = ({ userInfo }) => (
  <Block>
    <div className="container">
      <Nav>
        <BreadCrumbs>
          <Crumb to="/" src={home} alt="Link to Home" text="Home" />
          <Crumb
            to="/moments"
            src={moments}
            alt="Link to Moments"
            text="Moments"
          />
          <Crumb
            to="/notifications"
            src={notifications}
            alt="Link to Notifications"
            text="Notifications"
          />
          <Crumb
            to="/messages"
            src={messages}
            alt="Link to Messages"
            text="Messages"
          />
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
          <AvatarLink to={`/${userInfo.id}`}>
            <Avatar src={userInfo.avatar_static} />
          </AvatarLink>
          <Tweet>Tweet</Tweet>
        </ActionsContainer>
      </Nav>
    </div>
  </Block>
);

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  hasError: state.userInfoHasError,
  isLoading: state.userInfoIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: id => dispatch(userInfoFetchData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
