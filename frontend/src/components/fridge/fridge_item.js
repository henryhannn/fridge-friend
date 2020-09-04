import React from "react"; 
import moment from "moment"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  countQuantity(quantity, num) {
    let itemCount = quantity + num;
    return () => {
      this.props.editFridgeItemQuantity(this.props.fridgeId, {
        quantity: itemCount,
        fridgeItemId: this.props.fridgeItem._id,
      });
    }
  }

  quantity(quantity) {
    if (quantity === 1) {
      return (
        <div className="fridge-quantity">
          <p className="fridge-quantity-min">min</p>
          <p className="fridge-quantity-num">{quantity}</p>
          <div
            className="fridge-quantity-minus"
            onClick={this.countQuantity(quantity, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="fridge-quantity">
          <div
            className="fridge-quantity-minus"
            onClick={this.countQuantity(quantity, -1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="fridge-quantity-num">{quantity}</p>
          <div
            className="fridge-quantity-minus"
            onClick={this.countQuantity(quantity, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      );
    }
  }

  daysUntilExp() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const currentDate = yyyy + "-" + mm + "-" + dd;
    const expDate = this.props.expirationDate; // get item expiration date

    const diffDays = (expirationDate, currentDate) =>
      Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24));

    //will return the num of days until expiration as pos int, and days passed expiration as neg int
    return diffDays(new Date(expDate), new Date(currentDate));
  }

  expiration() {
    if (this.props.expirationDate === null) return "no expiration";
    const exp = this.daysUntilExp();
    if (exp > 0) {
      return exp;
    } else {
      const date = moment(this.props.expirationDate).format("MM/DD/YYYY");
      return `expired on ${date}`;
    }
  }

  render() {
    const expDays = this.daysUntilExp();

    let expColor;
    if (!this.props.expirationDate || expDays > 7) {
      expColor = "greenExpColor";
    } else if (expDays > 0 && expDays <= 7) {
      expColor = "yellowExpColor";
    } else {
      expColor = "redExpColor";
    }

    return (
      <li className="fridge-item-details">
        <div className="fridge-left">
          <p className="fridge-item-name">{this.props.fridgeItem.name}</p>
          <p className="fridge-item-owner">{this.props.fridgeItem.owner}</p>
          <p className="fridge-item-owner">Quantity:</p>
          {this.quantity(this.props.fridgeItem.quantity)}
        </div>
        <div className="fridge-right">
          <p className="fridge-item-ex">Expiration</p>
          <p className={`fridge-item-time ${expColor}`}>{this.expiration()}</p>
        </div>
      </li>
    );
  }
}

export default FridgeItem; 