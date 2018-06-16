import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
`;

const ProfileFace = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export default () => (
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
