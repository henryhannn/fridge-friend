import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import Calendar from 'react-calendar';
import './food_calendar_css.scss'
import { Link } from 'react-router-dom';
// import "react-calendar/dist/Calendar.css";

class FoodCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    }
  }

  render() {
    return (
      <div className="food-calendar-container">
        <NavBarContainer />
        <div className="calendar-container">
          <h1>Calendar</h1>
          <br />
          <Calendar
            // onChange={onChange}
            // value={state.date}
            style="none"
            className="react-calendar"
          />
          <button className="return-to-profile">
            <Link to="/profile">Return to Profile</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default FoodCalendar;

