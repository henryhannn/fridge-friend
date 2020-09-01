import React from 'react';
import './profile_css.scss';
import NavBarContainer from '../nav/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarAlt, faHome } from "@fortawesome/free-solid-svg-icons";

class Profile extends React.Component {
  render(){
    return (
      <div>
        <NavBarContainer />
          <div className="main-profile-container">
            <h1 className="whats-in-it">What's in the fridge today?</h1>
            <div className="main-profile-contents">
              <img
                className="kitchen"
                alt="kitchen"
                src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Kitchen_Final.png"
                ></img>
                <div className="profile-buttons">
                  <div className="fridge-names">
                    <FontAwesomeIcon icon={faHome} className="cal-icons" id="profile-fridge-icon"/>
                    <p className="fridge-name">{"Fridge Name"}</p>
                </div>
                  <button className="view-shopping-list">
                    {/* This will lead to user's shopping list */}
                    View Shopping List
                  </button>
                </div>
            </div>
        </div>
          <div className="second-profile-container">
              <div className="today">
                <FontAwesomeIcon icon={faCalendarDay} className="cal-icons" />
                <p>Today</p>
              </div>
              <div className="calendar-profile">
                <FontAwesomeIcon icon={faCalendarAlt} className="cal-icons"/>
                <p>Calendar</p>
              </div>
            </div>
          <div className="add-new-fridge">
            <button>
              Add New Fridge
            </button>
          </div>
      </div>
    )
  }
}

export default Profile;