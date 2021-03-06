import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Auth from '@hoc/Auth';
// import Index from './pages/index';
import Signin from '@pages/Signin';
import SignUpPage from '@pages/SignUpPage';
import Main from '@pages/Main';
import Label from '@pages/Label';
import Milestone from '@pages/Milestone';
import GitHubCallbackPage from '@pages/GitHubCallbackPage';
import CreateIssue from '@pages/CreateIssue';
import DetailIssue from '@pages/DetailIssue';
import EditMilestone from '@pages/EditMilestone';
import CreateMilestone from '@pages/CreateMilestone';

const GolbalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
  }
  input {
    -webkit-appearance: none;
  }
  
  html, body, #root {
    height: 100%;
  }
}

`;

const App = () => {
  return (
    <BrowserRouter>
      <GolbalStyled />
      <Switch>
        <Route path="/" exact component={Auth(Main, true)}></Route>
        {/* <Route path="/" exact component={Auth(Index, false)}></Route> */}
        <Route path="/signin" exact component={Auth(Signin, false)}></Route>
        <Route path="/signup" exact component={Auth(SignUpPage, false)}></Route>
        <Route path="/label" exact component={Auth(Label, true)}></Route>
        <Route
          path="/milestone"
          exact
          component={Auth(Milestone, true)}
        ></Route>
        <Route path="/issue/" exact component={Auth(CreateIssue, true)}></Route>
        <Route
          path="/milestone/edit/:id"
          component={Auth(EditMilestone, true)}
        ></Route>
        <Route
          path="/milestone/create"
          exact
          component={Auth(CreateMilestone, true)}
        ></Route>
        <Route path="/issue" exact component={Auth(CreateIssue, true)}></Route>
        <Route
          path="/github_callback"
          exact
          component={GitHubCallbackPage}
        ></Route>
        <Route
          exact
          path="/issue/:issueId"
          component={Auth(DetailIssue, true)}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
