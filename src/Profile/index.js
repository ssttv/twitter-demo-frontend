import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
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
  <main>
    <Helmet>
      <title>
        {findUser(match.params.user, "name")} (@{match.params.user})
      </title>
    </Helmet>
    <React.Fragment>
      <Header />
      <Container>
        <div className="container">
          <ProfileFace>
            <div className="col-xs-3">
              <Info
                handle={match.params.user}
                name={findUser(match.params.user, "name")}
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
              <Switch>
                <Route
                  exact
                  path={`${match.url}/following`}
                  render={() => <h3>This is Following</h3>}
                />
                <Route
                  exact
                  path={`${match.url}/followers`}
                  render={() => <h3>This is Followers</h3>}
                />
                <Route
                  exact
                  path={`${match.url}/likes`}
                  render={() => <h3>This is Likes</h3>}
                />
                <Route
                  exact
                  path={`${match.url}/lists`}
                  render={() => <h3>This is Lists</h3>}
                />
                <Route path={`${match.url}`} component={Posts} />
              </Switch>
            </div>
            <div className="col-xs-3">
              <OutreachSidebar />
            </div>
          </ProfileFace>
        </div>
      </Container>
    </React.Fragment>
    )
  </main>
);
