import React from "react";
import FoodItemSearch from "./food_item_search"; 

class FoodItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodGroup: "all",
    };
  }

  componentDidMount() {
    this.props.requestFoodItems();
  }

  render () {
    //search feature with search by category 
    //add item where you want it 
    //add custom item form
    if (this.props.foodItems.length > 1) {
      return (
        <div className="food-item-index">
          
          <FoodItemSearch
            foodItems={this.props.foodItems}
            filterByFoodGroup={this.props.filterByFoodGroup}
          />
        </div>
      );
    } else {
      return (
        <div>
          {/* loading spinner */}
        </div>
      )
    }
  }


}

export default FoodItemIndex; 



