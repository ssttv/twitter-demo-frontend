import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import person from "./person.svg";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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
  margin: 5px 0 0 5px;
`;

const Avatar = styled.img`
  width: 48px;
  background-color: #66757f;

  &:hover {
    border: 2px black;
  }
`;

const StLink = styled(Link)``;

const publicURL = process.env.PUBLIC_URL;

const followers = [
  {
    id: 1,
    name: "/mirhasanjamil75",
    src: `${publicURL}/img/avatar-person-1.png`
  },
  {
    id: 2,
    name: "/alexdown",
    src: `${publicURL}/img/avatar-person-2.png`
  },
  {
    id: 3,
    name: "/TerryCoopey",
    src: `${publicURL}/img/avatar-person-3.png`
  },
  {
    id: 4,
    name: "/NiamhKeaneB_ID",
    src: `${publicURL}/img/avatar-person-4.png`
  },
  {
    id: 5,
    name: "/venglarcik",
    src: `${publicURL}/img/avatar-person-5.png`
  },
  {
    id: 6,
    name: "/katzedsgn",
    src: `${publicURL}/img/avatar-person-6.png`
  }
];

export default () => (
  <Container>
    <Title to="/shared_followers" src={person} alt="follower icon">
      {followers.length} Followers you now
    </Title>
    <Followers>
      {followers.map(follower => (
        <React.Fragment key={follower.id}>
          {follower.id <= 10 && (
            <Follower>
              <StLink to={follower.name}>
                <Avatar
                  src={follower.src}
                  alt={`avatar ${follower.name.slice(1)}`}
                />
              </StLink>
            </Follower>
          )}
        </React.Fragment>
      ))}
    </Followers>
  </Container>
);
