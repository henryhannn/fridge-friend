import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import './today_css.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Today extends React.Component {
  constructor(props) {
    super(props)
    this.hasMatchingDates = this.hasMatchingDates.bind(this);
    this.expiredItems = this.expiredItems.bind(this);
  }

  hasMatchingDates() {
    let value = false;
    this.props.userOwnedItems.map(item => {
      const expDate = moment(item.expirationDate).format("MM.DD.YYYY");
      const selDate = moment().format("MM.DD.YYYY");

      if (expDate === selDate) {
        value = true;
      }
    })

    return value;
  }

  expiredItems() {
    let expiredItems = []
    this.props.userOwnedItems.map(item => {
      const expDate = moment(item.expirationDate).format("MM.DD.YYYY");
      const selDate = moment().format("MM.DD.YYYY");

      if (expDate === selDate) {
        expiredItems.push(item);
      }
    })

    return expiredItems;
  }


  render() {

    const successImg = (
      < img 
        className="success-image"
        src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Success+1.png" />
    )

    const failureImg = (
      <img
        className="success-image"
        src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/grocery-list.png" />
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
          {this.expiredItems().map((item) => (
            <li className="today-item-details">
              <div className="today-left">
                <p className="today-item-name">{item.name}</p>
              </div>
              <div className="today-right">
                <p className="today-item-owner">{item.fridgeName}</p>
              </div>
            </li>
          ))}
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
            {this.hasMatchingDates() ? expiringItems : onlyFreshItems}
            {this.hasMatchingDates() ? failureImg : successImg}
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