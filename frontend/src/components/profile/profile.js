import React from 'react';
import './profile_css.scss';
import NavBarContainer from '../nav/navbar_container';
import AddFridgeModalForm from './add_fridge_modal_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDay,
  faCalendarAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSnowflake
} from "@fortawesome/free-regular-svg-icons";
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

  componentDidMount() {
    this.props.fetchUserFridges(this.props.userId); 
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ showModal: true }, () => {
      const modalBackground = document.querySelector(
        ".fooditem-modal-background"
      );
      modalBackground.addEventListener("click", this.closeModal);
    });
  }

  closeModal() {
    const modalBackground = document.querySelector(
      ".fooditem-modal-background"
    );
    modalBackground.removeEventListener("click", this.closeModal);
    this.setState({ showModal: false });
  }

  renderAddFridgeModal() {
    if (this.state.showModal) {
      return (
        <div className="fooditem-modal-container">
          <div className="fooditem-modal-background">
            <div className="fooditem-modal-background-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
          <div className="fooditem-modal-form-container">
            <AddFridgeModalForm
              userId={this.props.userId}
              createFridge={this.props.createFridge}
              closeModal={() => this.closeModal()} />
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
              {this.props.fridges.length > 0 ? (
                <ul className="fridge-list">
                  {this.props.fridges.map((fridge) => (
                    <Link to={`/fridge/${fridge._id}`} key={fridge._id}>
                      <li className="fridge-list-item">
                        <div className="fridge-list-item-icon-name">
                          <FontAwesomeIcon
                            icon={faSnowflake}
                            className="snowflake-icon"
                          />
                          <p className="fridge-name">{fridge.name}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <div> </div>
              )}
            </div>
            <button className="shopping-list-btn">
              <Link to="/shoppinglist">Shopping List</Link>
            </button>
          </div>
          <div className="second-profile-container">
              <Link to="/today">
                <div className="today">
                  <FontAwesomeIcon icon={faCalendarDay} className="cal-icons" />
                    <p>Today</p>
                </div>
              </Link>
              <Link to="/calendar">
            <div className="calendar-profile">
              <FontAwesomeIcon icon={faCalendarAlt} className="cal-icons" />
                <p>Calendar</p>
            </div>
              </Link>
          </div>
          <div className="add-new-fridge">
            <button onClick={this.openModal}>Add New Fridge</button>
            {this.renderAddFridgeModal()}
          </div>
        </div>
      );
  }
}

export default Profile;