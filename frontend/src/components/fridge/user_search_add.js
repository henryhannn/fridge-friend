import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
// import { addUserToFridge } from "../../util/fridge_util"; 

class UserSearchAndAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: `Search fridge friends`,
      searchInput: `Search fridge friends`,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  searchedUsers() {
    const userList = [];
    for (let i = 0; i < this.props.users.length; i++) {
      let user = this.props.users[i];
      let userName = `${user.firstname} ${user.lastname}`.toLowerCase();

      if (userName.includes(this.state.searchInput.toLowerCase())) {
        userList.push(user);
      }
    }

    const newParticipants = userList.filter(
      (user) => !this.props.participants.includes(user._id)
    );

    if (userList[5] !== undefined) {
      const searchable = newParticipants.slice(0, 4);

      return searchable;
    } else {
      return newParticipants;
    }
  }

  openDropdown() {
    this.setState({ showDropdown: true }, () => {
      const searchBackground = document.querySelector(
        ".food-search-background"
      );
      searchBackground.addEventListener("click", this.closeDropdown);
      if (this.state.defaultText === this.state.searchInput) {
        this.setState({ searchInput: "" });
      }
    });
  }

  closeDropdown() {
    const searchBackground = document.querySelector(".food-search-background");
    searchBackground.removeEventListener("click", this.closeDropdown);
    this.setState({ showDropdown: false }, () => {
      if (this.state.searchInput === "") {
        this.setState({
          searchInput: `Search fridge friends`,
        });
      }
    });
  }

  searchedUsersDropdown() {
    const userList = this.searchedUsers();

    if (userList.length < 1) {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            <li key={1000} className="user-search-list-item" id="no-item-hover">
              <p>No user found</p>
            </li>
          </ul>
          <div className="food-search-background"></div>
        </div>
      );
    } else {
      return (
        <div className="food-item-search-list-container">
          <ul className="food-item-search-list">
            {userList.map((user, idx) => {
              return (
                <li
                  className="food-search-list-item"
                  onClick={this.addParticipant(user._id)}
                  key={idx}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="food-search-list-item-icon"
                  />
                  <p className="food-search-list-item-name">
                    {user.firstname} {user.lastname}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="food-search-background"></div>
        </div>
      );
    }
  }

  update() {
    return (e) =>
      this.setState({
        searchInput: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  addParticipant(userId) {
    return () => this.props.addParticipant(this.props.fridge._id, userId)
  }

  render() {
    if (this.props.users.length === 0) return null;
    return (
      <div className="food-search-bar-container">
        <div className="food-search-bar">
          <h1>Add a collaborator</h1>
          <form onSubmit={this.handleSubmit} className="food-search-bar-input">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              id="add-friends"
              value={this.state.searchInput}
              onClick={this.openDropdown}
              onChange={this.update()}
            />
          </form>
        </div>
        {this.state.showDropdown ? this.searchedUsersDropdown() : null}
      </div>
    );
  }
}

export default UserSearchAndAdd; 