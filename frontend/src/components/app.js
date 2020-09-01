import React from "react";
import { AuthRoute} from "../util/route_util";
// import { ProtectedRoute } from '../util/route_util';
import { Switch } from "react-router-dom";
import './app.scss';
import '../styles/main.scss'

import MainPage from "./main/main_page";
// import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import ProfileContainer from './profile/profile_container';

const App = () => (
  <div className="main-app">
    <header>
      {/* <NavBarContainer /> */}
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/" component={MainPage} />
      </Switch>
  </div>
);

export default App;
