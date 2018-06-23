import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import RightSidebar from "./ProfilePosts/RightSidebar";

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
`;

const ProfileFace = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
`;

export default () => (
  <React.Fragment>
    <Container>
      <div className="container">
        <ProfileFace>
          <div className="col-xs-3">
            <ProfileInfo />
          </div>
          <div className="col-xs-6">
            <ProfilePosts />
          </div>
          <div className="col-xs-3">
            <RightSidebar />
          </div>
        </ProfileFace>
      </div>
    </Container>
  </React.Fragment>
);
