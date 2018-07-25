// @flow
import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import { connect } from "react-redux";
import type { AccountData } from "../data/utils";
import userInfoFetchData from "../complexes/actions";
import Header from "./Header";
import Info from "./Info";
import Artefacts from "./Info/Artefacts";
import SharedFollowers from "./Info/SharedFollowers";
import Feeds from "./Feeds";
import Outreach from "./Outreach";

const env = process.env || {};
const secretKey = env.REACT_APP_SECRET_KEY;
if (!secretKey) throw new Error("missing API key");

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

const Splash = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
`;

type Props = {
  match: Match,
  userInfo: AccountData,
  hasError: boolean,
  isLoading: boolean,
  fetchUserInfo: Function
};

class Profile extends React.Component<Props> {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchUserInfo
    } = this.props;

    fetchUserInfo(id);
  }

  componentDidUpdate(prevProps: Props) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      const {
        match: {
          params: { id }
        },
        fetchUserInfo
      } = this.props;

      fetchUserInfo(id);
    }
  }

  render() {
    const { userInfo, hasError, isLoading } = this.props;

    if (hasError) {
      return <Splash>Error</Splash>;
    }

    if (!userInfo) {
      return <Splash>User info not found</Splash>;
    }

    if (userInfo && userInfo.error) {
      return <Splash>User could not be identified</Splash>;
    }

    if (isLoading) {
      return <Splash>Loading...</Splash>;
    }

    return (
      <main>
        <Helmet>
          <title>
            {`${userInfo.display_name}`} (@{`${userInfo.username}`})
          </title>
        </Helmet>
        <React.Fragment>
          <Header
            background={userInfo.header_static}
            avatar={userInfo.avatar_static}
            followers={userInfo.followers_count}
            following={userInfo.following_count}
            tweets={userInfo.statuses_count}
          />
          <Container>
            <div className="container">
              <ProfileFace>
                <div className="col-xs-3">
                  <Info
                    handle={userInfo.username}
                    name={userInfo.display_name}
                    verifiedStatus={false}
                    followStatus
                    bio={userInfo.note}
                    city="London"
                    country="UK"
                    website={userInfo.url}
                    date={userInfo.created_at}
                  />
                  <Route component={SharedFollowers} />
                  <Route component={Artefacts} />
                </div>
                <div className="col-xs-6">
                  <Switch>
                    <Route path={`/${userInfo.id}`} component={Feeds} />
                    <Route
                      exact
                      path={`${userInfo.id}/following`}
                      render={() => <h2> Following </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/followers`}
                      render={() => <h2> Followers </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/likes`}
                      render={() => <h2> Likes </h2>}
                    />
                    <Route
                      exact
                      path={`${userInfo.id}/lists`}
                      render={() => <h2> Lists </h2>}
                    />
                  </Switch>
                </div>
                <div className="col-xs-3">
                  <Outreach />
                </div>
              </ProfileFace>
            </div>
          </Container>
        </React.Fragment>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  hasError: state.userInfoHasError,
  isLoading: state.userInfoIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: id => dispatch(userInfoFetchData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
