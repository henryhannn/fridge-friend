import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import './today_css.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Today extends React.Component {
  constructor(props) {
    super(props)
    this.hasExpiringItems = this.hasExpiringItems.bind(this);
  }

  hasExpiringItems() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const currentDate = yyyy + "-" + mm + "-" + dd;
    const expDate = this.props.expirationDate;

    const diffDays = (expirationDate, currentDate) =>
      Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24));

    if (diffDays(new Date(expDate), new Date(currentDate)) === 1) {
      return true;
    }
  }

  render() {

    const successImg = (
      < img 
        className = "success-image"
        src = "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Success+1.png" />
    )

    const onlyFreshItems = (
      <div className="only-fresh">
        <p>You have no items expiring today!</p>
      </div>
    )

    const expiringItems = (
      <div>
        <p className="today-expiration">Expires Today</p>
        <ul>
          {/* If this.hasExpiringItems is true, render the ones that pass true in the function, otherwise don't render anything */}
          {/* {this.hasExpiringItems() ? "" : ""} */}
          <li className="today-item-details">
            <div className="today-left">
              <p className="today-item-name">Item Name</p>
            </div>
            <div className="today-right">
              <p className="today-item-owner">Owner</p>
            </div>
          </li>
        </ul>
      </div>
    )

    return (
      <div className="today-container">
        <NavBarContainer />
        <div className="today-align">
        <div className="today-cal">
            <h1 className="today-name">Today</h1>
            <p className="today-moment">{moment().format("MMMM Do YYYY")}</p>
            {this.hasExpiringItems() ? expiringItems : onlyFreshItems}
            {onlyFreshItems ? successImg : ""}
            <Link to="/foods">
              <button className="add-items">Add Items</button>
            </Link>
          </div>
        </div>
        </div>
      
    )
  }
}

export default Today;