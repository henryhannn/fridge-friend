import React from 'react';
import './navbar_css.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';
// import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
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
        <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
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
        <Link to="/login">
          <p className="logout-dropdown" onClick={this.logoutUser}>Log Out</p>
        </Link>
      </div>
    );

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
            <h1>Fridge Friend</h1>
  
              <FontAwesomeIcon 
                className="nav-bar-list" 
                icon={faList}
                onClick={this.openNav}
                />
              {this.openNav ? dropdown : this.closeNav}
        </div>
        
      </div>
    )
  }
}

export default NavBar;