import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class FoodItemSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: "Add a food item...",
      searchInput: "Add a food item...",
      foodItems: this.props.foodItems,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
  }

  searchedFoods() {
    const foodList = [];
    for (let i = 0; i < this.state.foodItems; i++) {
      let foodItem = this.state.foodItems[i];
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
            {foodList.map((foodItem) => {
              return (
                <li key={idx} className="food-search-list-item">
                  {/* onclick add item  */}
                  <h1>{foodItem.name}</h1>
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
      document.addEventListener("click", this.closeDropdown);
      if (this.state.defaultText === this.state.searchInput) {
        this.setState({ searchInput: "" });
      }
    });
  }

  closeDropdown() {
    this.setState({ showDropdown: false }, () => {
      document.removeEventListener("click", this.closeDropdown);
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
        <form onSubmit={this.handleSubmit} className="food-search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            className={defaultTextStyles}
            value={this.state.searchInput}
            onClick={this.openDropdown}
            onChange={this.update()}
          />
          {this.state.showDropdown ? this.searchedFoodsDropdown() : null}
        </form>
      </div>
    );
  }
}

export default FoodItemSearch;  