import React from "react";
import FoodItemSearch from "./food_item_search"; 
import NavBarContainer from "../nav/navbar_container"; 
import FoodItemCategories from "./food_item_categories"; 
import FoodItemModalForm from "./food_item_modal_form"; 
import FoodItemModalContainer from "./food_item_modal_container"; 

import "../../styles/main.scss";
import "../../styles/vars.scss"; 
import "./food_items_css.scss"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class FoodItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodGroup: "all",
      showModal: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.requestFoodItems();
  }

  openModal(e) {
    e.preventDefault(); 
    this.setState({ showModal: true }, () => {
      const modalBackground = document.querySelector(
        ".fooditem-modal-background"
      );
      modalBackground.addEventListener("click", this.closeModal);
    });
  }

  closeModal() {
    const modalBackground = document.querySelector(
      ".fooditem-modal-background"
    );
    modalBackground.removeEventListener("click", this.closeModal);
    this.setState({ showModal: false });
  }

  renderSearchModal() {
    if (this.state.showModal) {
      return (
        <div className="fooditem-modal-container">
          <div className="fooditem-modal-background">
            <div className="fooditem-modal-background-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
          <div className="fooditem-modal-form-container">
            <FoodItemModalContainer
              name={""}
              category={""}
              imageUrl={
                "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/other.svg"
              }
            />
          </div>
        </div>
      );
    }
  }

  render() {
    //search feature with search by category

    if (this.props.foodItems.length > 1) {
      return (
        <div className="food-item-page">
          <NavBarContainer />
          <div className="food-item-index">
            <FoodItemSearch
              foodItems={this.props.foodItems}
              filterByFoodGroup={this.props.filterByFoodGroup}
            />
            <div className="food-item-index-cats-custom">
              <FoodItemCategories />
              <button className="add-food-button" onClick={this.openModal}>
                Add Custom Item
              </button>
            </div>
            {this.renderSearchModal()}
          </div>
        </div>
      );
    } else {
      return <div>{/* loading spinner */}</div>;
    }
  }
}

export default FoodItemIndex; 



