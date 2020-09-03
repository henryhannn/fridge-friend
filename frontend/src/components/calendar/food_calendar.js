import React, { useState } from 'react';
import NavBarContainer from '../nav/navbar_container';
import Calendar from 'react-calendar';
import './food_calendar_css.scss'
import { Link } from 'react-router-dom';
import moment from 'moment';
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";


class FoodCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedDate: moment(),
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (e) => {
    this.setState({ selectedDate: e });
  };

  openModal(e) {
    // e.preventDefault();
    this.setState({ showModal: true }, () => {
      const modalBackground = document.querySelector(
        ".calendar-day-background"
      );
      modalBackground.addEventListener("click", this.closeModal);
    });
  }

  closeModal() {
    const modalBackground = document.querySelector(".calendar-day-background");
    modalBackground.removeEventListener("click", this.closeModal);
    this.setState({ showModal: false });
  }

  renderDayModal() {
    if (this.state.showModal) {
      return (
        <div className="calendar-day-container">
          <div className="calendar-day-background">
            <div className="calendar-day-background-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
          <div className="calendar-day-form-container">
            <h1>Today is {this.state.selectedDate.format("YYYY-MM-DD")}</h1>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="food-calendar-container">
        <NavBarContainer />
        <div id="calendar-container">
          <h1>Calendar</h1>
          <br />
          <Calendar
            onSelect={this.onSelect}
            onClickDay={this.openModal}
            className="react-calendar"
          />
          {this.renderDayModal()}
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

