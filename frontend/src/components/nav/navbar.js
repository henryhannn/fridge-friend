import React from 'react';
import './navbar_css.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserFridges(this.props.userId);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  openNav(e) {
    e.preventDefault();
    document.getElementById("mySideNav").style.width="250px";
  }

  closeNav(e) {
    e.preventDefault();
    document.getElementById("mySideNav").style.width="0";
  }


  render() {

    const dropdown = (
      <div id="mySideNav" className="sidenav">
        <a href="#" className="closebtn" onClick={this.closeNav}>
          &times;
        </a>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
        <Link to="/shoppinglist">
          <p>Shopping List</p>
        </Link>
        <Link to="/foods">
          <p>Add Items</p>
        </Link>
        <Link to="/today">
          <p>Today</p>
        </Link>
        <Link to="/calendar">
          <p>Calendar</p>
        </Link>

        {/* Once we have friend functionality: */}
        {/* <Link to="#">
          <p>Invite a Friend</p>
        </Link> */}
        <Link to="/aboutus">
          <p>About Us</p>
        </Link>

        <p className="logout-dropdown" onClick={this.logoutUser}>
          <Link to="/home">Log Out</Link>
        </p>
        {this.props.fridges.length > 0 ? (
          <ul className="fridge-list-nav">
            <p>My Fridges</p>
            {this.props.fridges.map((fridge) => (
              <Link to={`/fridge/${fridge._id}`} key={fridge._id}>
                <li className="fridge-list-item-nav">
                  <div className="fridge-list-item-icon-nav">
                    <FontAwesomeIcon
                      icon={faSnowflake}
                      className="snowflake-icon-nav"
                    />
                    <p className="fridge-name-nav">{fridge.name}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div> </div>
        )}
      </div>
    );

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <h1>
            <Link to="/profile">Fridge Friend</Link>
          </h1>

          <FontAwesomeIcon
            className="nav-bar-list"
            icon={faList}
            onClick={this.openNav}
          />
          {this.openNav ? dropdown : this.closeNav}
        </div>
      </div>
    );
  }
}

export default NavBar;