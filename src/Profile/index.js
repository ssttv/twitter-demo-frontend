// @flow
import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import { connect } from "react-redux";
import type { AccountData } from "../data/utils";
import addData from "../complexes/actions";
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

type Props = {
  match: Match,
  userInfo: AccountData,
  addDataToStore: Function
};

class Profile extends React.Component<Props> {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      addDataToStore
    } = this.props;

    const getUserId = (): string => {
      const errorWatchdog: string = "1";
      if (id === null || id === undefined) {
        return errorWatchdog;
      }
      const userId: string = id;
      return userId;
    };

    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${getUserId()}?access_token=${secretKey}`
    )
      .then(res => res.json())
      .then(data => {
        addDataToStore(data);
      });
  }

  componentDidUpdate(prevProps: Props) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      const {
        match: {
          params: { id }
        },
        addDataToStore
      } = this.props;

      const getUserId = (): string => {
        const errorWatchdog: string = "1";
        if (id === null || id === undefined) {
          return errorWatchdog;
        }
        const userId: string = id;
        return userId;
      };

      fetch(
        `https://twitter-demo.erodionov.ru/api/v1/accounts/${getUserId()}?access_token=${secretKey}`
      )
        .then(res => res.json())
        .then(data => {
          addDataToStore(data);
        });
    }
  }

  render() {
    const { userInfo } = this.props;
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

function mapStateToProps(state) {
  return { userInfo: state.account.userInfo };
}

function mapDispatchToProps(dispatch) {
  return {
    addDataToStore: data => {
      dispatch(addData(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
