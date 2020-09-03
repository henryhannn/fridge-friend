import React from "react";
import "./fridge_css.scss";
import NavBarContainer from "../nav/navbar_container";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-solid-svg-icons";


class Fridge extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAdd = this.redirectToAdd.bind(this);
  }

  redirectToAdd(e) {
    e.preventDefault();
    this.props.history.push("/foods");
  }

  daysUntilExp() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();

    const currentDate = yyyy + "-" + mm + "-" + dd;
    const expDate = this.props.expirationDate; // get item expiration date

    const diffDays = (expirationDate, currentDate) =>
      Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24));

    //will return the num of days until expiration as pos int, and days passed expiration as neg int
    return diffDays(new Date(expDate), new Date(currentDate));  
  }

  expiringItemsColor() {
    // this function will change the text-color based on how close the expiration date is:
    // 1 week or more $dark-blue
    // 4-7 days $error-yellow
    // 1-3 days $error-red
  }

  render() {
    return (
      <div className="fridge-container">
        <NavBarContainer />
        <div className="fridge">
          <h1 className="fridge-name">Fridge Name</h1>
          <div className="fridge-item-details">
            <div className="fridge-left">
              <p className="fridge-item-name">Fridge Item</p>
              <p className="fridge-item-owner">Owner</p>
            </div>
            <div className="fridge-right">
              <p className="fridge-item-ex">Expiration</p>
              <p className="fridge-item-time">Days Left</p>
            </div>
          </div>
        </div>
        <div className="add-items-section">
          <button onClick={this.redirectToAdd} className="add-items-btn">
            Add Items
          </button>
        </div>
      </div>
    );
  }
}

export default Fridge;
