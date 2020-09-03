import React from 'react';
import './shopping_list_css.scss';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { Route, Redirect, withRouter } from "react-router-dom";


class ShoppingList extends React.Component {
  constructor(props) {
    super(props); 
    this.redirectToAdd = this.redirectToAdd.bind(this); 
  }

  redirectToAdd(e) {
      e.preventDefault(); 
      this.props.history.push("/foods");
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="today-align">
          <div className="shopping-list">
            <h1 className="shopping-list-header">Shopping List</h1>
            <div className="shopping-list-section">
              <FontAwesomeIcon
                className="shopping-list-circle-icon"
                icon={faCircle}
              />
              <div className="shopping-list-item-details">
                <p className="shopping-list-item">Shopping List Item</p>
                <p className="belongs-to-fridge">Fridge Name</p>
              </div>
            </div>
          </div>
          <div className="add-items-section">
            <button onClick={this.redirectToAdd} className="add-items-btn">
              Add Items
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;