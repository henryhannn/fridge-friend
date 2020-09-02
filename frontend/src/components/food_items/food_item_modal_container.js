import { connect } from "react-redux";
import FoodItemModalForm from "./food_item_modal_form"; 
import { withRouter } from "react-router-dom";

//need user patch and fridge patch - add items to either place 

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    category: ownProps.category,
    imageUrl: ownProps.imageUrl,
    fridge: "all the fridges owned by user",
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodItemModalForm))
