// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dateFormat } from "../../data/utils";
import mapmarker from "../icons/mapmarker.svg";
import linkimg from "../icons/linkimg.svg";
import calendar from "../icons/calendar.svg";
import checkmark from "../icons/checkmark.svg";

const ProfileTitle = styled.div``;

const ProfileContainer = styled.div`
  padding-top: 32px;
  max-width: 265px;
`;

const UserLink = styled(Link)`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const UserHandle = styled.div`
  display: flex;
  flex-direction: row;

  & .link-profile {
    text-decoration: none;
    color: black;
  }
`;

const FullName = styled.h1`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: 0.02px;

  &:hover {
    text-decoration: underline;
  }
`;

const Checkmark = styled.img`
  margin-left: 5px;
  margin-top: 4px;
`;

const FollowContainer = styled.div`
  padding-top: 6px;
`;

const FollowState = styled.button`
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

const Pick = Country.extend``;

const Actions = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Interact = styled.button`
  color: white;
  padding: 10px 12px;
  border-radius: 100px;
  border-style: none;
  background-color: #1da1f2;
  min-width: 128px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

type Props = {
  handle: string,
  name: string,
  verifiedStatus: boolean,
  followStatus: boolean,
  bio: string,
  city: string,
  country: string,
  website: string,
  date: string
};

export default ({
  handle,
  name,
  verifiedStatus,
  followStatus,
  bio,
  city,
  country,
  website,
  date
}: Props) => (
  <ProfileContainer>
    <ProfileTitle>
      <UserHandle>
        <UserLink to={`/${handle}`}>
          <FullName>{name}</FullName>
        </UserLink>
        {verifiedStatus && <Checkmark alt="Verified user" src={checkmark} />}
      </UserHandle>
      <FollowContainer>
        <UserLink to={`/follow/${handle}`}>
          {followStatus && <FollowState>{`@${handle}`}</FollowState>}
        </UserLink>
        <TextFollow>Follows you</TextFollow>
      </FollowContainer>
    </ProfileTitle>
    <ProfileBio dangerouslySetInnerHTML={{ __html: bio }} />
    <Location>
      <LocationIcon alt="mapmarker" src={mapmarker} />
      <Place>
        <City>{city}</City>,
        <Country>{country}</Country>
      </Place>
    </Location>
    <Website>
      <WebsiteIcon alt="website" src={linkimg} />
      <Source href={website}>{website}</Source>
    </Website>
    <DateOfReg>
      <DateIcon alt="Registration date" src={calendar} />
      <Date>
        Joined <Pick>{dateFormat(date)}</Pick>
      </Date>
    </DateOfReg>
    <Actions>
      <Interact>Tweet to</Interact>
      <Interact>Message</Interact>
    </Actions>
  </ProfileContainer>
);
