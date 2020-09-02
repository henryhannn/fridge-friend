import React from "react";

import './app.scss';
import '../styles/main.scss'; 


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

import MainPage from "./main/main_page";
// import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import ProfileContainer from './profile/profile_container';
import FoodItemIndexContainer from './food_items/food_item_index_container'; 
import FridgeContainer from './fridge/fridge_container';

const App = () => (

  <div className="main-app">
    <header>
      {/* <NavBarContainer /> */}
    </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/profile" component={ProfileContainer} />
        <Route exact path="/foods" component={FoodItemIndexContainer} />
        {/* Not sure how this route will look: */}
        {/* <Route exact path={`/fridge/${fridge.id}`} component={FridgeContainer} /> */}
        <Route exact path="/fridge" component={FridgeContainer} />
        <AuthRoute path="/" component={MainPage} />
      </Switch>
      <Footer/>
  </div>
);

export default App;
