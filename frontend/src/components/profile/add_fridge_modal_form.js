import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class AddFridgeModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: this.props.name;
      // participants: this.props.participants;
    }
  }
  
  update(field) {
    return (e) => 
    this.setState({
      [field]: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="add-fridge-form">
        <form>
          <input
            type="text"
            value={this.state.name}
            className="add-fridge-modal-form-input"
            onChange={this.update("name")}
            placeholder="Fridge Name"
            />
        </form>
      </div>
    )
  }
}

export default AddFridgeModalForm;