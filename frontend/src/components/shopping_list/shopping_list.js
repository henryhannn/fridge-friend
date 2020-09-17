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
  }

  circleIcon(doneStatus) {
    return doneStatus ? faCheckCircle : faCircle;
  }

  circleIconClass(doneStatus) {
    return doneStatus
      ? "shopping-list-circle-icon-checked"
      : "shopping-list-circle-icon";
  }

  putInFridgeAndDelete(item) {
    this.props.addFridgeItem(item.fridgeId, {
      name: item.name,
      category: item.category,
      owner: this.props.userId,
      expirationDate: null,
      quantity: item.quantity,
      imageUrl: item.imageUrl
    });
    this.props.removeItem(this.props.userId, item._id);
  }

  countQuantity(itemId, quantity, num) {
    let itemCount = quantity + num;
    return () => this.props.editQuantity(this.props.userId, itemId, itemCount); 
  }

  quantity(quantity, itemId) {
    if (quantity === 1) {
      return (
        <div className="quantity-form-container-shopping-list">
        <div className="quantity-align">
          <p className="quantity-min">min</p>
          <p className="quantity-num">{quantity}</p>
          <div className="quantity-minus" onClick={this.countQuantity(itemId, quantity, 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          </div >
        </div>
      );
    } else {
      return (
        <div className="quantity-form-container">
          <div className="quantity-align">
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
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        
        <div className="shopping-list">
          <h1 className="shopping-list-header">Shopping List</h1>
            <ul className="shopping-list-categories">
              {Object.keys(this.props.listItems).map((category, idx) => {
                return (
                  <div key={idx}>
                    <div className="shopping-list-category-label">
                      {category}
                    </div>
                    <div className="shopping-list-category">
                      <ul>
                        {this.props.listItems[category].map((item) => {
                          return (
                            <li className="shopping-list-category-item" key={item._id}>
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
                                {/* name, fridge, quantity & button */}
                                <div className="item-and-fridge">
                                  <p className="shopping-list-item-name">
                                    {item.name}
                                  </p>
                                  <a 
                                    className="belongs-to-fridge"
                                    onClick={() => this.putInFridgeAndDelete(item)}
                                    >
                                    Add to {this.props.fridges[item.fridgeId].name}
                                  </a>
                                </div>
                                <div className="align-me">
                                {this.quantity(item.quantity, item._id)}
                                </div>
                            </li>
                        );
                      })}
                    </ul>
                  </div>
                  </div>
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
    );
  }
}

export default ShoppingList;