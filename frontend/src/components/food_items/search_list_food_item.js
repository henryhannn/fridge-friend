import React from "react";
// import FoodItemModalForm from "./food_item_modal_form"; 
import FoodItemModalContainer from "./food_item_modal_container"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class SearchListFoodItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    };

    this.closeModal = this.closeModal.bind(this); 
    this.openModal = this.openModal.bind(this); 
  }

  openModal() {
    this.setState({ showModal: true }, () => {
      const modalBackground = document.querySelector(".fooditem-modal-background");
      modalBackground.addEventListener("click", this.closeModal);
    });
  }

  closeModal() {
    const modalBackground = document.querySelector(".fooditem-modal-background");
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
              name={this.props.foodItem.name}
              closeModal={() => this.closeModal()}
              category={this.props.foodItem.category}
              imageUrl={this.props.foodItem.imageUrl}
            />
          </div>
        </div>
      );
    }
  } 

  render() {
     
    return (
      <div className="food-search-list-item" onClick={this.openModal}>
        <FontAwesomeIcon icon={faPlus} className="food-search-list-item-icon" />
        <p className="food-search-list-item-name">{this.props.foodItem.name}</p>
        {this.renderSearchModal()}
      </div>
    );
  }
}

export default SearchListFoodItem; 