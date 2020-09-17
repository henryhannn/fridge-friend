import React from 'react';
import { Link } from 'react-router-dom';

import './splash_css.scss'

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-component">
        <div className="splash-page">
          <div className="splash-about-us">
            <h1>Learn About The Creators</h1>
            <button><Link to="/aboutus">About Us</Link></button>
          </div>
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
              <h1>Features</h1>
              <p>
                Track how long an item has until it expires, check which items belong to who
                and create fridges for special events! Have a potluck? Make sure no two folks
                bring the same item!
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
              Sign Up
            </button>
          </Link>
          <p className="member-login">
            Already a member? <Link to="/login" className="splash-member">Log In</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Splash;