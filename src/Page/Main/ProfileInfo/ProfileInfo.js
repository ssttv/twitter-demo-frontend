import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mapmarker from "./mapmarker.svg";
import linkimg from "./linkimg.svg";
import date from "./date.svg";
import checkmark from "./checkmark.svg";

const ProfileContainer = styled.div`
  padding-top: 32px;
  max-width: 265px;
`;

const ProfileTitle = styled.div``;

const UserHandle = styled.div`
  display: flex;
  flex-direction: row;

  & .link-profile {
    text-decoration: none;
    color: black;
  }
`;

const Text = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: 0.02px;

  &:hover {
    text-decoration: underline;
  }
`;

const Verified = styled.img`
  margin-left: 5px;
  margin-top: 4px;
`;

const FollowContainer = styled.div`
  padding-top: 6px;
`;

const StatusFollow = styled.button`
  background: transparent;
  padding-left: 0;
  border: none;
  color: #697787;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.01px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TextFollow = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.01px;
  color: #697787;
`;

const ProfileBio = styled.p`
  margin: 0;
  padding-top: 12px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
  letter-spacing: 0.01px;
  padding-bottom: 2px;
  margin-right: 10px;
`;

const Location = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 13px;
`;

const LocationIcon = styled.img``;

const Place = styled.div`
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.01px;
  color: #697787;
`;

const City = styled.span``;

const Country = City.extend`
  padding-left: 4px;
`;

const Website = Location.extend`
  padding-top: 0;
`;

const WebsiteIcon = styled.img``;

const Source = styled.a`
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.01px;
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const DateOfReg = Location.extend`
  padding-top: 0;
`;

const DateIcon = styled.img``;

const Date = Place.extend``;

const Month = Country.extend``;

const Year = Month.extend``;

const Actions = styled.div`
  padding-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tweet = styled.button`
  color: white;
  padding: 10px 12px;
  border-radius: 100px;
  background-color: #1da1f2;
  min-width: 128px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Message = Tweet.extend``;

export default () => {
  return (
    <ProfileContainer>
      <ProfileTitle>
        <UserHandle>
          <Link to="/EveryInteract" className="link-profile">
            <Text>Every Interaction</Text>
          </Link>
          <Verified alt="Verified user" src={checkmark} />
        </UserHandle>
        <FollowContainer>
          <Link to="/EveryInteract">
            <StatusFollow>@EveryInteract</StatusFollow>
          </Link>
          <TextFollow>Follows you</TextFollow>
        </FollowContainer>
      </ProfileTitle>
      <ProfileBio>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </ProfileBio>
      <Location>
        <LocationIcon alt="mapmarker" src={mapmarker} />
        <Place>
          <City>London</City>,
          <Country>UK</Country>
        </Place>
      </Location>
      <Website>
        <WebsiteIcon alt="website" src={linkimg} />
        <Source href="everyinteraction.com">everyinteraction.com</Source>
      </Website>
      <DateOfReg>
        <DateIcon alt="Registration date" src={date} />
        <Date>
          Joined
          <Month>May</Month>
          <Year>2008</Year>
        </Date>
      </DateOfReg>
      <Actions>
        <Tweet>Tweet to</Tweet>
        <Message>Message</Message>
      </Actions>
    </ProfileContainer>
  );
};
