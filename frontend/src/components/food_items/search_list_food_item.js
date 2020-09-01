import React from "react";
import FoodItemModalForm from "./food_item_modal_form"; 

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
            i am the background
            <div>button to close modal XXX</div>
          </div>
          <div className="fooditem-modal-form-container">
            <FoodItemModalForm foodItem={this.props.foodItem} />
          </div>
        </div>
      );
    }
  } 

  render() {
     
    return (
      <div onClick={this.openModal}>
        <h1>{this.props.foodItem.name}</h1>
        {this.renderSearchModal()}
      </div>
    );
  }
}

export default SearchListFoodItem; 