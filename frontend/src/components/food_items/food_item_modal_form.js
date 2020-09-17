import React from "react"; 
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus, faMinus, faChevronUp, faCheck } from "@fortawesome/free-solid-svg-icons";


class FoodItemModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      category: this.props.category,
      expirationDate: null,
      owner: "",
      done: false,
      imageUrl: this.props.imageUrl,
      location: "",
      quantity: 1,
      fridge: "",
      showNameDescription: false,
      showQuantityDescription: false,
      showFridgeDescription: false,
      showCategoryDescription: false,
      showLocationDescription: false,
      showDateDescription: false,
      added: false,
    };
    this.openNameDescription = this.openNameDescription.bind(this);
    this.closeNameDescription = this.closeNameDescription.bind(this);
    this.openQuantityDescription = this.openQuantityDescription.bind(this);
    this.closeQuantityDescription = this.closeQuantityDescription.bind(this);
    this.openCategoryDescription = this.openCategoryDescription.bind(this);
    this.closeCategoryDescription = this.closeCategoryDescription.bind(this);
    this.openLocationDescription = this.openLocationDescription.bind(this);
    this.closeLocationDescription = this.closeLocationDescription.bind(this);
    this.openFridgeDescription = this.openFridgeDescription.bind(this);
    this.closeFridgeDescription = this.closeFridgeDescription.bind(this);
    this.openDateDescription = this.openDateDescription.bind(this);
    this.closeDateDescription = this.closeDateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserFridges(this.props.userId);
    this.props.receiveErrors([]);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  capitalizeName(name) {
    if (name.length > 0) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    } else if (this.state.category.length > 0) {
      let category = this.state.category;
      return category.charAt(0).toUpperCase() + category.slice(1);
    } else {
      return "Custom Item";
    }
  }

  countQuantity(num) {
    let quantity = this.state.quantity;
    let itemCount = quantity + num;
    return (e) => this.setState({ quantity: itemCount });
  }

  quantity() {
    if (this.state.quantity === 1) {
      return (
        <div
          onClick={this.openQuantityDescription}
          className="quantity-form-container"
        >
          <p className="quantity-min"><FontAwesomeIcon icon={faMinus}/></p>
          <p className="quantity-num">{this.state.quantity}</p>
          <div className="quantity-minus" onClick={this.countQuantity(1)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {this.state.showQuantityDescription ? (
            <div className="food-name-input-description">
              <p>Click the plus and minus to change quantity</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="quantity-form-container">
          <div className="quantity-minus" onClick={this.countQuantity(-1)}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="quantity-num">{this.state.quantity}</p>
          <div className="quantity-minus" onClick={this.countQuantity(1)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {this.state.showQuantityDescription ? (
            <div className="food-name-input-description">
              <p>Click the plus and minus to change quantity</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          ) : null}
        </div>
      );
    }
  }

  renderFridgePicker() {
    if (this.state.location.includes("shopping")) {
      return (
        <div
          onClick={this.openFridgeDescription}
          className="add-food-form-category_selector"
        >
          {this.state.showFridgeDescription ? (
            <div className="food-name-input-description">
              <p>Assign your shopping list item to a fridge</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          ) : null}

          <select
            onChange={this.update("fridge")}
            id="add-food-form-category_selector"
          >
            <option value="select fridge">Select Fridge</option>
            {this.props.fridges.map((fridge) => (
              <option value={fridge._id}>{fridge.name}</option>
            ))}
          </select>
        </div>
      );
    }
  }

  renderDatePicker() {
    if (this.state.location.includes("fridge")) {
      return (
        <div
          onClick={this.openDateDescription}
          className="add-food-form-date-picker"
        >
          <SingleDatePicker
            date={this.state.expirationDate} // momentPropTypes.momentObj or null
            onDateChange={(date) => this.setState({ expirationDate: date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            placeholder="Exp Date"
            numberOfMonths={1}
            openDirection="up"
          />
          {this.state.showDateDescription ? (
            <div className="food-date-input-description">
              <FontAwesomeIcon icon={faChevronUp} />
              <p>Optional: select food item's expiration date</p>
            </div>
          ) : null}
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.fridgeErrors).map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {this.props.fridgeErrors[error]}
          </li>
        ))}
      </ul>
    );
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

  openQuantityDescription() {
    this.setState({ showQuantityDescription: true }, () => {
      document.addEventListener("click", this.closeQuantityDescription);
    });
  }

  closeQuantityDescription() {
    document.removeEventListener("click", this.closeQuantityDescription);
    this.setState({ showQuantityDescription: false });
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

  openFridgeDescription() {
    this.setState({ showFridgeDescription: true }, () => {
      document.addEventListener("click", this.closeFridgeDescription);
    });
  }

  closeFridgeDescription() {
    document.removeEventListener("click", this.closeFridgeDescription);
    this.setState({ showFridgeDescription: false });
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

    const locationArray = this.state.location.split(" ");
    const locationId = locationArray[1];

   
    if (this.state.location.includes("fridge")) {
      const expDate = this.state.expirationDate
        ? this.state.expirationDate["_d"]
        : null;

      const fridgeFoodItem = {
        name: this.state.name,
        category: this.state.category,
        quantity: this.state.quantity,
        expirationDate: expDate,
        owner: this.props.userId,
        imageUrl: this.state.imageUrl,
      };
      this.props
        .addFridgeItem(locationId, fridgeFoodItem)
        .then(() => this.setState({ added: true }))
        .then(() => setTimeout(() => this.props.closeModal(), 1000));
    } else if (this.state.location.includes("shopping")) {
      const shoppingFoodItem = {
        name: this.state.name,
        category: this.state.category,
        quantity: this.state.quantity,
        imageUrl: this.state.imageUrl,
        fridgeId: this.state.fridge,
      };
      this.props
        .addShoppingListItem(locationId, shoppingFoodItem)
        .then(() => this.setState({ added: true }))
        .then(() => setTimeout(() => this.props.closeModal(), 1000));
    } else {
      
      this.props.receiveErrors(["Please fill in all inputs"])
    }
  }

  render() {
    return (
      <form className="add-food-form">
        <h1>Add {this.capitalizeName(this.state.name)}</h1>
        <div className="add-food-img-container">
          <img src={this.state.imageUrl} alt=""></img>
        </div>
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
          {this.quantity()}
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
              <option selected={this.selected("condiment")} value="condiment">
                condiment
              </option>
              <option selected={this.selected("dairy")} value="dairy">
                dairy
              </option>
              <option selected={this.selected("dessert")} value="dessert">
                dessert
              </option>
              <option selected={this.selected("drink")} value="drink">
                drink
              </option>
              <option selected={this.selected("eggs")} value="eggs">
                eggs
              </option>
              <option selected={this.selected("fruit")} value="fruit">
                fruit
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
              <option selected={this.selected("vegetable")} value="vegetable">
                vegetable
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
              <option value={`{shoppingList: ${this.props.userId}`}>
                shopping list
              </option>
              {this.props.fridges.map((fridge) => (
                <option value={`{fridge: ${fridge._id}`}>{fridge.name}</option>
              ))}
            </select>
          </div>
          {this.renderDatePicker()}
          {this.renderFridgePicker()}
          {this.renderErrors()}
          {this.state.added ? (
            <div className="add-food-button">
              Added <FontAwesomeIcon icon={faCheck} />
            </div>
          ) : (
            <button className="add-food-button" onClick={this.handleSubmit}>
              Add Item
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default FoodItemModalForm; 