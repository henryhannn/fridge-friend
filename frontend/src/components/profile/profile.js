import React from 'react';
import './profile_css.scss';
import NavBarContainer from '../nav/navbar_container';
import AddFridgeModalForm from './add_fridge_modal_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarAlt, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ showModal: true }, () => {
      const modalBackground = document.querySelector(
        ".addfridge-modal-background"
      );
      modalBackground.addEventListener("click", this.closeModal);
    });
  }

  closeModal() {
    const modalBackground = document.querySelector(
      ".addfridge-modal-background"
    );
    modalBackground.removeEventListener("click", this.closeModal);
    this.setState({ showModal: false });
  }

  renderAddFridgeModal() {
    if (this.state.showModal) {
      return (
        <div className="addfridge-modal-container">
          <div className="addfridge-modal-background">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        <div className="addfridge-modal-form-container">
          <AddFridgeModalForm
            name={""}
            participants={""}
            />
        </div>
      </div>
      );
    }
  }

  render(){
    return (
      <div>
        <NavBarContainer />
          <div className="main-profile-container">
            <h1 className="whats-in-it">What's in the fridge today?</h1>
            <div className="fridge-kitchen-container">
              {/* kitchen image: */}
              <img
                className="kitchen"
                alt="kitchen"
                src="https://fridge-friend-seeds.s3-us-west-1.amazonaws.com/Kitchen_Final.png"
              ></img>
              {/* fridges: */}
              <div className="fridge-list">
                <FontAwesomeIcon icon={faHome} className="cal-icons" id="profile-fridge-icon" />
                {/* This is where you should loop through the fridges and render each one! */}
                <p className="fridge-name">{"Fridge Name"}</p>
              </div>
            </div>
          <button className="shopping-list-btn">
            <Link to="/shoppinglist">Shopping List</Link>
          </button>
        </div>
          <div className="second-profile-container">
              <div className="today">
                <FontAwesomeIcon icon={faCalendarDay} className="cal-icons" />
                <Link to="/today"><p>Today</p></Link>
              </div>
              <div className="calendar-profile">
                <FontAwesomeIcon icon={faCalendarAlt} className="cal-icons"/>
                <Link to="/calendar"><p>Calendar</p></Link>
              </div>
            </div>
          <div className="add-new-fridge">
            <button onClick={this.openModal}>
              Add New Fridge
            </button>
            {this.renderAddFridgeModal()}
          </div>
      </div>
    )
  }
}

export default Profile;