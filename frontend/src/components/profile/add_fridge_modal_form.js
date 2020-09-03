import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class AddFridgeModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      userId: this.props.userId,
    }
  }
  
  update(field) {
    return (e) => 
    this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFridge(this.state.userId, this.state.name); 
  }

  render() {
    return (
      <div className="add-fridge-form-container">
        <form className="add-fridge-form">
          <h1>
            Add Fridge: <br /> {this.state.name}
          </h1>
          <div className="add-food-img-container">
            <img
              src={
                "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/fridge.svg"
              }
              alt=""
            ></img>
          </div>
          <input
            type="text"
            value={this.state.name}
            className="add-fridge-modal-form-input"
            onChange={this.update("name")}
            placeholder="Fridge Name"
          />
          <button className="add-fridge-button" onClick={this.handleSubmit}>
            Add Fridge
          </button>
        </form>
      </div>
    );
  }
}

export default AddFridgeModalForm;