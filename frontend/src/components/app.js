import React from "react";

import './app.scss';
import '../styles/main.scss'; 


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

import MainPage from "./main/main_page";
import NavBarContainer from './nav/navbar_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import ProfileContainer from './profile/profile_container';
import FoodItemIndexContainer from './food_items/food_item_index_container'; 

const App = () => (

  <div className="main-app">
    <header>
      {/* <NavBarContainer /> */}
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <Route exact path="/foods" component={FoodItemIndexContainer} />
        <AuthRoute exact path="/" component={MainPage} />
      </Switch>
  </div>
);

export default App;
