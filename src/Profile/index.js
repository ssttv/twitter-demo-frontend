import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import Artefacts from "./Info/Artefacts";
import SharedFollowers from "./Info/SharedFollowers";
import Feeds from "./Feeds";
import Outreach from "./Outreach";
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
                  render={() => <h2>This is Following</h2>}
                />
                <Route
                  exact
                  path={`${match.url}/followers`}
                  render={() => <h2>This is Followers</h2>}
                />
                <Route
                  exact
                  path={`${match.url}/likes`}
                  render={() => <h2>This is Likes</h2>}
                />
                <Route
                  exact
                  path={`${match.url}/lists`}
                  render={() => <h2>This is Lists</h2>}
                />
                <Route path={`${match.url}`} component={Feeds} />
              </Switch>
            </div>
            <div className="col-xs-3">
              <Outreach />
            </div>
          </ProfileFace>
        </div>
      </Container>
    </React.Fragment>
    )
  </main>
);
