import React from 'react';
import './navbar_css.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

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

  openNav() {
    document.getElementById("mySideNav").style.width="250px";
  }

  closeNav() {
    document.getElementById("mySideNav").style.width="0";
  }


  render() {

    const dropdown = (
      <div id="mySideNav" className="sidenav">
        <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="#">Shopping List</a>
        <a href="#">My Fridges</a>
        <a href="#">Invite a Friend</a>
        <a className="logout-dropdown" onClick={this.logoutUser}>Log Out</a>
      </div>
    );

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
            <h1>Fridge Friends</h1>
  
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