import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import person from "./person.svg";
import Title from "./Title";
import followers from "../../../data/followers";

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
