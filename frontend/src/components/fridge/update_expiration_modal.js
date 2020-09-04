import React from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class UpdateExpirationModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expirationDate: null,
      fridgeItemId: this.props.fridgeItem._id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.expirationDate !== null){
      this.props.editFridgeItemExpDate(this.props.fridgeId, {
        fridgeItemId: this.state.fridgeItemId,
        expirationDate: this.state.expirationDate["_d"]
      })
    }
  }

  render() {
    return (
      <div className="add-fridge-form-container" >
        <form className="add-fridge-form">
          <h1>Update Item Expiration</h1>
          <div className="add-food-img-container">
            <img
              src={
                "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/fridge.svg"
              }
              alt=""
            ></img>
          </div>

          <div
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
            />
          </div>

          <button className="update-exp-fridge-button" onClick={this.handleClick}>
            Save Expiration Date
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateExpirationModalForm;
