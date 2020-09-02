import React from "react"; 
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


class FoodItemModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.foodItem.name,
      category: this.props.foodItem.category,
      expirationDate: null,
      owner: "",
      done: false,
      imageUrl: "",
      location: "",
      showNameDescription: false,
      showCategoryDescription: false,
      showLocationDescription: false,
      showDateDescription: false,
    };
    this.openNameDescription = this.openNameDescription.bind(this);
    this.closeNameDescription = this.closeNameDescription.bind(this);
    this.openCategoryDescription = this.openCategoryDescription.bind(this);
    this.closeCategoryDescription = this.closeCategoryDescription.bind(this);
    this.openLocationDescription = this.openLocationDescription.bind(this);
    this.closeLocationDescription = this.closeLocationDescription.bind(this);
    this.openDateDescription = this.openDateDescription.bind(this);
    this.closeDateDescription = this.closeDateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  update(field) {
    // debugger;
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  renderDatePicker() {
    if (this.state.location === "shopping list") {
      // debugger;
      return (
        <div
          onClick={this.openDateDescription}
          className="add-food-form-date-picker"
        >
          {this.state.showDateDescription ? (
            <div className="food-name-input-description">
              <p>Select food item's expiration date</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          ) : null}

          <SingleDatePicker
            date={this.state.expirationDate} // momentPropTypes.momentObj or null
            onDateChange={(date) => this.setState({ expirationDate: date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            placeholder="Exp Date"
            numberOfMonths={1}
            small
          />
        </div>
      );
    }
  }

  openNameDescription() {
    this.setState({ showNameDescription: true }, () => {
      document.addEventListener("click", this.closeNameDescription);
    });
  }

  closeNameDescription() {
    document.removeEventListener("click", this.closeNameDescription);
    this.setState({ showNameDescription: false });
  }

  openCategoryDescription() {
    this.setState({ showCategoryDescription: true }, () => {
      document.addEventListener("click", this.closeCategoryDescription);
    });
  }

  closeCategoryDescription() {
    document.removeEventListener("click", this.closeCategoryDescription);
    this.setState({ showCategoryDescription: false });
  }

  openLocationDescription() {
    this.setState({ showLocationDescription: true }, () => {
      document.addEventListener("click", this.closeLocationDescription);
    });
  }

  closeLocationDescription() {
    document.removeEventListener("click", this.closeLocationDescription);
    this.setState({ showLocationDescription: false });
  }

  openDateDescription() {
    this.setState({ showDateDescription: true }, () => {
      document.addEventListener("click", this.closeDateDescription);
    });
  }

  closeDateDescription() {
    document.removeEventListener("click", this.closeDateDescription);
    this.setState({ showDateDescription: false });
  }

  selected(value) {
    if (this.state.category === value) {
      return "selected";
    } else {
      return "";
    }
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const shoppingFoodItem = {
      name: this.state.name,
      category: this.state.category,
      imageUrl: "",
    };

    const fridgeFoodItem = {
      name: this.state.name,
      category: this.state.category,
      expirationDate: this.state.expirationDate["_d"],
      owner: "",
      imageUrl: "",
    };
    debugger; 
  }

  render() {
 
    return (
      <form className="add-food-form">
        <h1>Add {this.capitalizeName(this.state.name)}</h1>
        {/* image */}
        <div className="login-fields">
          <div onClick={this.openNameDescription} className="food-name-input">
            {this.state.showNameDescription ? (
              <div className="food-name-input-description">
                <p>Add your food item name here</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ) : null}
            <input
              type="text"
              value={this.state.name}
              className="food-modal-form-input"
              onChange={this.update("name")}
              placeholder="Item Name"
            />
          </div>
          <div
            onClick={this.openCategoryDescription}
            className="add-food-form-category_selector"
          >
            {this.state.showCategoryDescription ? (
              <div className="food-name-input-description">
                <p>Select your food item's category here</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ) : null}

            <select
              onChange={this.update("category")}
              id="add-food-form-category_selector"
            >
              <option value="select category">Select Category</option>
              <option selected={this.selected("condiments")} value="condiments">
                condiments
              </option>
              <option selected={this.selected("dairy")} value="dairy">
                dairy
              </option>
              <option selected={this.selected("desserts")} value="desserts">
                desserts
              </option>
              <option selected={this.selected("drinks")} value="drinks">
                drinks
              </option>
              <option selected={this.selected("eggs")} value="eggs">
                eggs
              </option>
              <option selected={this.selected("fruit")} value="fruit">
                fruits
              </option>
              <option selected={this.selected("grains")} value="grains">
                grains
              </option>
              <option selected={this.selected("leftovers")} value="leftovers">
                leftovers
              </option>
              <option selected={this.selected("party")} value="party">
                party
              </option>
              <option selected={this.selected("protein")} value="protein">
                protein
              </option>
              <option selected={this.selected("vegetable")} value="vegetables">
                vegetables
              </option>
              <option selected={this.selected("other")} value="other">
                other
              </option>
            </select>
          </div>
          <div
            onClick={this.openLocationDescription}
            className="add-food-form-category_selector"
          >
            {this.state.showLocationDescription ? (
              <div className="food-name-input-description">
                <p>
                  Select the fridge or shopping list in which your item will be
                  placed
                </p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ) : null}

            <select
              onChange={this.update("location")}
              id="add-food-form-category_selector"
            >
              <option value="select location">Select Location</option>
              <option value="shopping list">shopping list</option>
            </select>
          </div>
          {this.renderDatePicker()}
          <button className="add-food-button" onClick={this.handleSubmit}>Add Item</button>
        </div>
      </form>
    );
  }
}

export default FoodItemModalForm; 