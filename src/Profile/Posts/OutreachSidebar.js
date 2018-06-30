import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Suggest from "./Suggest";
import Action from "./Action";
import Trend from "./Trend";
import CorporateInfo from "./CorporateInfo";
import people from "./people.svg";

const Container = styled.div``;

const Suggestions = styled.div`
  margin-top: 6px;
  padding-right: 8px;
  position: relative;
`;

const SideTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Actions = styled.div``;

const Desc = styled.h3`
  margin: 0;
  font-size: 17px;
  line-height: 20px;
`;

const Sidebar = styled.div`
  justify-content: flex-end;
  background-color: white;
  padding: 12px 14px;
  margin-bottom: 10px;
  min-height: 290px;
  min-width: 250px;
`;

const SearchText = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  margin: 0;
  margin-left: 8px;
  border-bottom: 1px solid transparent;
`;

const SearchLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  &:hover {
    ${SearchText} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Trends = styled.div``;

const SearchIcon = styled.img``;
export default () => (
  <Container>
    <Sidebar>
      <SideTitle>
        <Desc>Who to follow</Desc>
        <Actions>
          <Action text="Refresh" to="/update" />
          <Action text="View all" to="/view_all" />
        </Actions>
      </SideTitle>
      <Suggestions>
        <Suggest />
      </Suggestions>
      <SearchLink to="/all_people">
        <SearchIcon src={people} />
        <SearchText>Find people you know</SearchText>
      </SearchLink>
    </Sidebar>
    <Sidebar>
      <Trends>
        <SideTitle>
          <Desc>United Kingdom Trends</Desc>
          <Action to="/change" text="Change" />
        </SideTitle>
        <Trend />
      </Trends>
    </Sidebar>
    <CorporateInfo />
  </Container>
);
