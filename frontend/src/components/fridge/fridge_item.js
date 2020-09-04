import React from "react";

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  daysUntilExp() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const currentDate = yyyy + "-" + mm + "-" + dd;
    const expDate = this.props.expirationDate; // get item expiration date

    const diffDays = (expirationDate, currentDate) =>
      Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24));

    //will return the num of days until expiration as pos int, and days passed expiration as neg int
    return diffDays(new Date(expDate), new Date(currentDate));
  }

  // printName() {
  //   const results = this.props.names.filter(function(names) { return names === this.props.fridgeItem.owner; });
  //   return results;
  // }

  render() {
    if (this.props.names === null) {return null};
    return (
      <li className="fridge-item-details">
        <div className="fridge-left">
          <p className="fridge-item-name">{this.props.fridgeItem.name}</p>
          <p className="fridge-item-owner">{this.props.names[this.props.fridgeItem.owner].firstname}</p>
          {/* <p className="fridge-item-owner">{this.printName()}</p> */}
        </div>
        <div className="fridge-right">
          <p className="fridge-item-ex">Expiration</p>
          <p className="fridge-item-time">Days Left</p>
        </div>
      </li>
    );
  }
}

export default FridgeItem; 