import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import Artefacts from "./Info/Artefacts";
import SharedFollowers from "./Info/SharedFollowers";
import Posts from "./Posts";
import OutreachSidebar from "./Posts/OutreachSidebar";
import { findUser } from "../data/utils";

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

export default ({ match }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {findUser(match.params.user, "name")} (@{match.params.user})
      </title>
    </Helmet>
    <Header />
    <main>
      <Container>
        <div className="container">
          <ProfileFace>
            <div className="col-xs-3">
              <Info
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
              <Route component={SharedFollowers} />
              <Route component={Artefacts} />
            </div>
            <div className="col-xs-6">
              <Posts />
            </div>
            <div className="col-xs-3">
              <OutreachSidebar />
            </div>
          </ProfileFace>
        </div>
      </Container>
    </main>
  </React.Fragment>
);
