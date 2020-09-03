import React from "react";
import "./fridge_css.scss";
import NavBarContainer from "../nav/navbar_container";
import FridgeItem from "./fridge_item"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-solid-svg-icons";


class Fridge extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAdd = this.redirectToAdd.bind(this);
  }

  componentDidMount() {
    this.props.requestFridgeItems(this.props.match.params.fridgeId);
  }

  redirectToAdd(e) {
    e.preventDefault();
    this.props.history.push("/foods");
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
          <ul>
            <li className="fridge-item-details">
              <div className="fridge-left">
                <p className="fridge-item-name">Fridge Item</p>
                <p className="fridge-item-owner">Owner</p>
              </div>
              <div className="fridge-right">
                <p className="fridge-item-ex">Expiration</p>
                <p className="fridge-item-time">Days Left</p>
              </div>
            </li>
            {/* 
            map over fridge items 

            {this.props.fridgeItems.map((fridgeItem) => {
                <FridgeItem fridgeItem={fridgeItem} />
            })} */}
          </ul>
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
