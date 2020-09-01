import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SearchListFoodItem from "./search_list_food_item"; 

class FoodItemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: "Add a food item...",
      searchInput: "Add a food item...",
      showDropdown: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
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
    return foodList;
  }

  searchedFoodsDropdown() {
    const foodList = this.searchedFoods();

    if (foodList.length < 1) {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            <li
              key={1000}
              className="food-search-list-item"
              id="no-location-hover"
            >
              <p>No items available</p>
              {/* add custom item  */}
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            {foodList.map((foodItem, idx) => {
              return (
                <li key={idx} className="food-search-list-item">
                  < SearchListFoodItem foodItem={foodItem}/>
                </li>
              );
            })}
          </ul>
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
    this.setState({ showDropdown: false }, () => {
      const searchBackground = document.querySelector(".food-search-background");
      searchBackground.removeEventListener("click", this.closeDropdown);
      if (this.state.searchInput === "") {
        this.setState({ searchInput: "Add a food item..." });
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
      this.state.defaultText === this.state.searchInput
        ? "defaultTextStyles"
        : "";

    return (
      <div className="food-search-bar-container">
        <div className="food-search-bar">
          <form>
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              className={defaultTextStyles}
              value={this.state.searchInput}
              onClick={this.openDropdown}
              onChange={this.update()}
            />
          </form>
          {this.state.showDropdown ? this.searchedFoodsDropdown() : null}
        </div>
        <div className="food-search-background">
          I am the search bar background
        </div>
      </div>
    );
  }
}

export default FoodItemSearch;  