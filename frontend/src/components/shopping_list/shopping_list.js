import React from 'react';
import './shopping_list_css.scss';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Route, Redirect, withRouter } from "react-router-dom";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAdd = this.redirectToAdd.bind(this);
  }

  redirectToAdd(e) {
    e.preventDefault();
    this.props.history.push("/foods");
  }

  componentDidMount() {
    this.props.requestItems(this.props.userId);
    // this.props.getFridges(this.props.userId);
  }

  circleIcon(doneStatus) {
    return doneStatus ? faCheckCircle : faCircle;
  }

  circleIconClass(doneStatus) {
    return doneStatus
      ? "shopping-list-circle-icon-checked"
      : "shopping-list-circle-icon";
  }

  countQuantity(itemId, quantity, num) {
    let itemCount = quantity + num;
    return () => this.props.editQuantity(this.props.userId, itemId, itemCount); 
  }

  quantity(quantity, itemId) {
    if (quantity === 1) {
      return (
        <div className="quantity-form-container">
          <p className="quantity-min">min</p>
          <p className="quantity-num">{quantity}</p>
          <div className="quantity-minus" onClick={this.countQuantity(itemId, quantity, 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="quantity-form-container">
          <div
            className="quantity-minus"
            onClick={this.countQuantity(itemId, quantity, -1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="quantity-num">{quantity}</p>
          <div
            className="quantity-minus"
            onClick={this.countQuantity(itemId, quantity, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      );
    }
  }

  render() {
    if (Object.keys(this.props.listItems).length === 0) return null;
    if (Object.keys(this.props.fridges).length === 0) return null;
    return (
      <div>
        <NavBarContainer />
        <div className="shopping-list">
          <h1 className="shopping-list-header">Shopping List</h1>
          <div className="shopping-list-section">
            <ul className="shopping-list-categories">
              {Object.keys(this.props.listItems).map((category, idx) => {
                return (
                  <li className="shopping-list-category" key={idx}>
                    <span className="shopping-list-category-label">
                      {category}
                    </span>
                    <ul className="shopping-list-category-items">
                      {this.props.listItems[category].map((item) => {
                        return (
                          <li className="shopping-list-item" key={item._id}>
                            <FontAwesomeIcon
                              className={this.circleIconClass(item.done)}
                              onClick={() =>
                                this.props.toggleItemDone(
                                  this.props.userId,
                                  item._id
                                )
                              }
                              icon={this.circleIcon(item.done)}
                            />
                            <div className="shopping-list-item-details">
                              <p className="shopping-list-item-name">
                                {item.name}
                              </p>
                              <p className="belongs-to-fridge">
                                {this.props.fridges[item.fridgeId].name}
                              </p>
                              {this.quantity(item.quantity, item._id)}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
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