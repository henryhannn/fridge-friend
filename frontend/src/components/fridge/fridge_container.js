import { connect } from "react-redux";

import Fridge from "./fridge";

const mapStateToProps = (state) => ({
  // fridgeContainer: Object.values(state.entities.fridgeItems),
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Fridge);
