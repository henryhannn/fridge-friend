import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import SearchListFoodItem from "./search_list_food_item"; 
import FoodItemModalContainer from "./food_item_modal_container"; 

class FoodItemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: "Add Grocery Items...",
      searchInput: "Add Grocery Items...",
      showDropdown: false,
      showModal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  searchedFoods() {
    const foodList = [];
    for (let i = 0; i < this.props.foodItems.length; i++) {
      let foodItem = this.props.foodItems[i];
      let foodItemName = foodItem.name;

      if (foodItemName.includes(this.state.searchInput.toLowerCase())) {
        foodList.push(foodItem);
      }
    }

    if (foodList[10] !== undefined) {
      const firstFood = foodList.slice(0, 10);

      return firstFood;
    } else {
      return foodList;
    }
  }

  openModal() {
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
              name={this.state.searchInput}
              closeModal={() => this.closeModal()}
              category={""}
              imageUrl="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/category-icons/other.svg"
            />
          </div>
        </div>
      );
    }
  }

  searchedFoodsDropdown() {
    const foodList = this.searchedFoods();

    if (foodList.length < 1) {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            <li key={1000} className="food-search-list-item" id="no-item-hover">
              <p>No items available</p>
            </li>
            <li className="food-search-list-item" onClick={this.openModal}>
              <FontAwesomeIcon
                icon={faPlus}
                className="food-search-list-item-icon"
              />
              <p>Add Custom Item</p>
              {this.renderSearchModal()}
            </li>
          </ul>
          <div className="food-search-background"></div>
        </div>
      );
    } else {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            {foodList.map((foodItem, idx) => {
              return (
                <li key={idx}>
                  <SearchListFoodItem foodItem={foodItem} />
                </li>
              );
            })}
          </ul>
          <div className="food-search-background"></div>
        </div>
      );
    }
  }

  openDropdown() {
    this.setState({ showDropdown: true }, () => {
      const searchBackground = document.querySelector(
        ".food-search-background"
      );
      searchBackground.addEventListener("click", this.closeDropdown);
      if (this.state.defaultText === this.state.searchInput) {
        this.setState({ searchInput: "" });
      }
    });
  }

  closeDropdown() {
    const searchBackground = document.querySelector(".food-search-background");
    searchBackground.removeEventListener("click", this.closeDropdown);
    this.setState({ showDropdown: false }, () => {
      if (this.state.searchInput === "") {
        this.setState({ searchInput: "Add Grocery Items..." });
      }
    });
  }

  update() {
    return (e) =>
      this.setState({
        searchInput: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const defaultTextStyles =
      this.state.defaultText !== this.state.searchInput
        ? "defaultTextStyles"
        : "";

    return (
      <div className="food-search-bar-container">
        <div className="food-search-bar">
          <h1>Search for items</h1>
          <form onSubmit={this.handleSubmit} className="food-search-bar-input">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              id={defaultTextStyles}
              value={this.state.searchInput}
              onClick={this.openDropdown}
              onChange={this.update()}
            />
          </form>
        </div>
        {this.state.showDropdown ? this.searchedFoodsDropdown() : null}
      </div>
    );
  }
}

export default FoodItemSearch;  