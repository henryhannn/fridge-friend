import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import './food_calendar_css.scss'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Calendar from 'react-calendar-pane';


class FoodCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedDate: moment(),
    };

    this.onSelect = this.onSelect.bind(this);
    this.expiredItems = this.expiredItems.bind(this);
    this.hasMatchingDates = this.hasMatchingDates.bind(this);
  }

  onSelect = (e) => {
    // debugger;
    this.setState({ selectedDate: e });
  };

  // returns array of expired items;
  expiredItems() {
    let expiredItems = []
    this.props.userOwnedItems.map(item => {
      const expDate = moment(item.expirationDate).format("MM.DD.YYYY");
      const selDate = this.state.selectedDate.format("MM.DD.YYYY");
      
      if ( expDate === selDate ) {
        expiredItems.push(item);
      }
    })
    
    return expiredItems;
  }

  // returns array of expired items;
  hasMatchingDates() {
    let value = false;
    this.props.userOwnedItems.map(item => {
      const expDate = moment(item.expirationDate).format("MM.DD.YYYY");
      const selDate = this.state.selectedDate.format("MM.DD.YYYY");
      
      if (expDate === selDate) {
        value = true; 
      }
    })
    
    return value;
  }

  render() {
    return (
      <div className="food-calendar-container">
        <NavBarContainer />
        <div id="calendar-container">
          <h1>Calendar</h1>
          <br />
          <Calendar
            // date={this.state.selectedDate}
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
          {this.hasMatchingDates() ? (
            <ul className="expiring-items-list">
              {this.expiredItems().map((item) => (
                <li className="expiring-item" key={item.id}>
                { this.expiredItems() ? (
                    <div>
                      <p className="expiring-item-name">{item.name}</p>
                      <p className="expiring-item-fridge">{item.fridgeName}</p>
                    </div> )
                    : null }
                </li>
              ))}
            </ul>
          ) : (
            <div></div>
          )}

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

