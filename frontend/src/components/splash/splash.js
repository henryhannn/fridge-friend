import React from 'react';
import { Link } from 'react-router-dom';

import './splash_css.scss'

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-component">
        <div className="splash-page">
          <h1>Welcome to Fridge Friend</h1>
          <p>
            Already a member? <Link to="/login">Log In</Link>
          </p>
          <div className="splash-01">
            <img
              className="splash-hero-img"
              src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Teamwork+Illustration+4.png"
            ></img>
            <div className="hero-description">
              <h1>Friends Stealing Your Eggs?</h1>
              <p>
                Achieve peace of mind with Fridge Friend. Ever wonder which of
                your roommates is eating all your eggs? Well, now you can track
                all of your egg disappearances with our organizational app.
              </p>
              <Link to="/signup">
                <button className="get-started">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="splash-02">
            <div className="splash-02-description">
              <h1>Eggs</h1>
              <p>
                Why not eggs!? Are you crazy? Eggs are great. Are they
                vegetarian? We're not sure. Are they vegan? Definitely not!
                Protein? Sure. Fun? Absegglutely. Eggs are fantastic.
              </p>
            </div>
            <img
              className="egg-splash"
              src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/egg.svg"
            ></img>
          </div>
        </div>
        <div className="splash-03">
          <h1>Ready to have a new friend?</h1>
          <Link to="/signup">
            <button className="welcome-button">
              Welcome to Fridge Friends
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;