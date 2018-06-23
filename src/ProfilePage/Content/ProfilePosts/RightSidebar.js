import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Suggest from "./Suggest";
import Action from "./Action";
import Trend from "./Trend";
import people from "./people.svg";
import MarginsBlock from "./MarginsBlock";

const Container = styled.div``;

const Recommendations = styled.div`
  margin-top: 6px;
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

const TrendsContainer = styled.div`
  margin-top: 14px;
`;

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
      <Recommendations>
        <Suggest
          src={`${process.env.PUBLIC_URL}/img/rec-avatar-1.png`}
          to="/rec1"
          name="AppleInsider"
          status={false}
          handle="@appleinsider"
        />
        <Suggest
          src={`${process.env.PUBLIC_URL}/img/rec-avatar-2.png`}
          to="/rec2"
          name="Creode"
          status
          handle="@Creode"
        />
        <Suggest
          src={`${process.env.PUBLIC_URL}/img/rec-avatar-3.png`}
          to="/rec3"
          name="Epiphany Search"
          status={false}
          handle="@Epiphanysearch"
        />
      </Recommendations>
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
        <TrendsContainer>
          <Trend
            tag="#BringYourDogToWorkDay"
            to="/hashtag/BringYourDogToWorkDay"
            text={null}
            tweets={null}
          />
          <Trend
            tag="#FridayFeeling"
            to="/hashtag/FridayFeeling"
            text={null}
            tweets={12100}
          />
          <Trend
            tag="#BrexitAnniversary"
            to="/hashtag/BrexitAnniversary"
            text="It’s one year since the UK voted to leave the European Union"
            tweets={null}
          />
          <Trend
            tag="HMS Queen Elizabeth"
            to="/search/HMS_Queen_Elizabeth"
            text={null}
            tweets={1036}
          />
          <Trend
            tag="Joe Budden"
            to="/search/Joe_Budden"
            text={null}
            tweets={1036}
          />
          <Trend tag="Trident" to="/search/Trident" text={null} tweets={6136} />
        </TrendsContainer>
      </Trends>
    </Sidebar>
    <MarginsBlock />
  </Container>
);
