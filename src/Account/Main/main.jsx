import React from "react";
import ProfileInfo from "./Profile/information";
import ProfilePosts from "./Posts/posts";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
`;

const ProfileFace = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export default () => {
  return (
    <div>
      <Container>
        <div className="container">
          <ProfileFace>
            <ProfileInfo />
            <ProfilePosts />
          </ProfileFace>
        </div>
      </Container>
    </div>
  );
};
