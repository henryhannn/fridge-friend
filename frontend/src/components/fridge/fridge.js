import React from "react";
import "./fridge_css.scss";
import NavBarContainer from "../nav/navbar_container";
import UserSearchAndAddContainer from "./user_search_add_container"; 
import RemoveFridgeModalForm from "./remove_fridge_modal_form"; 
import FridgeItem from "./fridge_item"; 
import { fetchNames } from "../../util/names_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";


class Fridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.redirectToAdd = this.redirectToAdd.bind(this);
    this.state = { names: null };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.requestFridgeItems(this.props.match.params.fridgeId);
    fetchNames(this.props.fridge.participants).then((names) =>
      this.setState({ names: names.data })
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.fridge.participants !==
      this.props.fridge.participants
    ) {
      this.props.requestFridgeItems(this.props.match.params.fridgeId);
      fetchNames(this.props.fridge.participants).then((names) =>
      this.setState({ names: names.data })
    )}
  }

  redirectToAdd(e) {
    e.preventDefault();
    this.props.history.push("/foods");
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

  renderRemoveFridgeModal() {
    if (this.state.showModal) {
      return (
        <div className="fooditem-modal-container">
          <div className="fooditem-modal-background">
            <div className="fooditem-modal-background-icon">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
          <div className="fooditem-modal-form-container">
            <RemoveFridgeModalForm
              history={this.props.history}
              leaveFridge={this.props.leaveFridge}
              fridgeId={this.props.fridgeId}
              userId={this.props.userId}
            />
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.names === null) return null;
    if (Object.keys(this.state.names).length < this.props.fridge.participants.length)
      return null;
    console.log(this.state.names);
    return (
      <div className="fridge-container">
        <NavBarContainer />
        <UserSearchAndAddContainer
          participants={this.props.fridge.participants}
          fridge={this.props.fridge}
        />
        <div className="fridge">
          <h1 className="fridge-name">{this.props.fridge.name}</h1>
          <div className="fridge-participants">
            {this.props.fridge.participants.map((person) => {
              return <p>{this.state.names[person].firstname}</p>;
            })}
          </div>
          <ul>
            {Object.values(this.props.fridgeItems).map((fridgeItem) => {
              return (
                <FridgeItem
                  key={fridgeItem._id}
                  fridgeItem={fridgeItem}
                  fridgeId={this.props.fridgeId}
                  expirationDate={fridgeItem.expirationDate}
                  editFridgeItemQuantity={this.props.editFridgeItemQuantity}
                  removeFridgeItem={this.props.removeFridgeItem}
                  names={this.state.names}
                  userName={this.state.names[fridgeItem.owner].firstname}
                  editFridgeItemExpDate={this.props.editFridgeItemExpDate}
                />
              );
            })}
          </ul>
        </div>

        <div className="add-items-section">
          <button onClick={this.redirectToAdd} className="add-items-btn">
            Add Items
          </button>
          <button onClick={this.openModal} className="leave-fridge-btn">
            Leave Fridge
          </button>
          {this.renderRemoveFridgeModal()}
        </div>
      </div>
    );
  }
}

export default Fridge;
