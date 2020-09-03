import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import './food_calendar_css.scss'
import { Link } from 'react-router-dom';
import moment from 'moment';
import "react-calendar/dist/Calendar.css";
import Calendar from 'react-calendar-pane';


class FoodCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedDate: moment(),
    };
  
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (e) => {
    this.setState({ selectedDate: e });
  };

  render() {
    return (
      <div className="food-calendar-container">
        <NavBarContainer />
        <div id="calendar-container">
          <h1>Calendar</h1>
          <br />
          <Calendar
            date={this.state.selectedDate}
            onSelect={this.onSelect}
            onClickDay={this.openModal}
            className="react-calendar"
          />
        </div>
        <div className="selected-date-div">
          <div className="selected-date-heading">
            <h1>Items Expiring On:</h1>
            <p>{this.state.selectedDate.format("MM.DD.YYYY")}</p>
          </div>

          {/* expiring items */}
          {/* check if selected date has expired items */}
          {/* this.props.alluseritems.length > 0 ? ( */}
            <ul className="expiring-items-list">
              {/* this.props.allUserItems.map((item) => ( */}
              <li className="expiring-item">
                <p className="expiring-item-name">Item Name</p>
                <p className="expiring-item-fridge">Fridge</p>
                <p className="expiring-item-name">{/* item.name */}</p>
                <p className="expiring-item-fridge">{/* item.fridge */}</p>
              </li>
              {/* ))} */}
            </ul>
          {/* ) : ( */}
          {/* <div></div> */}
          {/* )} */}
          <button className="return-to-profile">
            <Link to="/profile">Return to Profile</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default FoodCalendar;



// STRAT HERER

