import React from "react";

import './app.scss';
import '../styles/main.scss'; 


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

import Footer from './footer/footer';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import AboutUs from './aboutus/about_us';
import SplashPage from './splash/splash';

import ProfileContainer from './profile/profile_container';
import FoodItemIndexContainer from './food_items/food_item_index_container'; 
import FridgeContainer from './fridge/fridge_container';
import ShoppingListContainer from './shopping_list/shopping_list_container';

import TodayContainer from './calendar/today_container';
import FoodCalendarContainer from './calendar/food_calendar_container';

const App = () => (
  <div className="main-app">
    
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <Route path="/aboutus" component={AboutUs} />

      <ProtectedRoute exact path="/foods" component={FoodItemIndexContainer} />
      <ProtectedRoute exact path="/fridge/:fridgeId" component={FridgeContainer} />

      <ProtectedRoute exact path="/shoppinglist" component={ShoppingListContainer} />
      <ProtectedRoute exact path="/today" component={TodayContainer} />
      <ProtectedRoute exact path="/calendar" component={FoodCalendarContainer} />


      <AuthRoute path="/" component={SplashPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
