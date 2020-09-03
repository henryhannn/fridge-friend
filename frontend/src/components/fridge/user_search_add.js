import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimesCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { addUserToFridge } from "../../util/fridge_util"; 

class UserSearchAndAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: `Add a friend to ${this.props.fridgeName}...`,
      searchInput: `Add a friend to ${this.props.fridgeName}...`,
    };
  }

  componentDidMount() {}

  render() {

  }
}

export default UserSearchAndAdd; 