import React from "react"; 

class FoodItemModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.foodItem.name,
      category: this.props.foodItem.category,
      expiration: "",
    };
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  selected(value) {
    if (this.state.name === value) {
      return "selected"; 
    } else {
      return ""
    }
  }

  render() {

    return (
      <form className="add-food-form">
        <h1>Add {this.capitalizeName(this.state.name)}</h1>
        {/* image */}
        <div className="login-fields">
          <input
            type="text"
            value={this.state.name}
            className="food-modal-form-input"
            onChange={this.update("name")}
            placeholder="Item Name"
          />
          <div className="add-food-form-category_selector">
            <select
              onChange={this.update("category")}
              id="add-food-form-category_selector"
            >
              <option value="condiments">condiments</option>
              <option value="dairy">dairy</option>
              <option value="desserts">desserts</option>
              <option value="drinks">drinks</option>
              <option value="eggs">eggs</option>
              <option value="fruits">fruits</option>
              <option value="grains">grains</option>
              <option value="leftovers">leftovers</option>
              <option value="party">party</option>
              <option value="protein">protein</option>
              <option value="vegetables">vegetables</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default FoodItemModalForm; 