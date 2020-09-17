import React from "react";

class RemoveFridgeModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(e) {
    e.preventDefault();
    this.props.leaveFridge(this.props.fridgeId, this.props.userId)
    this.props.history.push("/profile"); 
  }


  render() {
    return (
      <div className="add-fridge-form-container">
        <form className="add-fridge-form">
          <h1>Remove Fridge From Account</h1>
          <div className="add-food-img-container">
            <img
              src={
                "https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/fridge.svg"
              }
              alt=""
            ></img>
          </div>
          <p className="remove-fridge-question">
            Are you sure you would like to remove this fridge from your account?
          </p>
          <p className="remove-fridge-disclaimer">
            You will no longer have access to this fridge. If you would like to
            rejoin this fridge, a collaborator must invite you directly.
          </p>
          <button className="add-fridge-button remove-fridge-form-button" onClick={this.handleClick}>
            Yes, Remove Fridge.
          </button>
        </form>
      </div>
    );
  }
}

export default RemoveFridgeModalForm;