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

  componentDidMount() {
    this.props.requestItems(this.props.userId);
    this.props.getFridges(this.props.userId);
  }

  render() {
    console.log(this.props.listItems);
    console.log(Object.keys(this.props.listItems));
    if (Object.keys(this.props.listItems).length === 0) return null;
    if (Object.keys(this.props.fridges).length === 0) return null;
    return (
      <div>
        <NavBarContainer/>
        <div className="shopping-list">
          <h1 className="shopping-list-header">Shopping List</h1>
          <div className="shopping-list-section">
            <ul className="shopping-list-categories">
              {
                Object.keys(this.props.listItems).map((category) => {
                  return <li className="shopping-list-category">
                    <span className="shopping-list-category-label">{category}</span>
                    <ul className="shopping-list-category-items">
                      {
                        this.props.listItems[category].map((item) => {
                          return <li className="shopping-list-item">
                            <FontAwesomeIcon
                              className="shopping-list-circle-icon" 
                              icon={faCircle} />
                            <div className="shopping-list-item-details">
                              <p className="shopping-list-item-name">{item.name}</p>
                              <p className="belongs-to-fridge">
                                {this.props.fridges[item.fridgeId].name}
                              </p>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        <div className="add-items-section">
          <button onClick={this.redirectToAdd} className="add-items-btn">Add Items</button>
        </div>
      </div>
    )
  }
}

export default ShoppingList;