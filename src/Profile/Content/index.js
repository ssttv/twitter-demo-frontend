import React from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';
import OutreachSidebar from './ProfilePosts/OutreachSidebar';

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
            <ProfileInfo
              handle="EveryInteract"
              name="Every Interaction"
              verifiedStatus
              followStatus
              bio="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
              city="London"
              country="UK"
              website="everyinteraction.com"
              month="May"
              year={2008}
            />
          </div>
          <div className="col-xs-6">
            <ProfilePosts />
          </div>
          <div className="col-xs-3">
            <OutreachSidebar />
          </div>
        </ProfileFace>
      </div>
    </Container>
  </React.Fragment>
);
