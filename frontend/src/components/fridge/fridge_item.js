import React from "react"; 
import moment from "moment"; 

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

  expiration() {
    const exp = this.daysUntilExp(); 
    if (exp > 4) {
      return exp;
    } else {
      const date = moment(this.props.expirationDate).format("MM/DD/YYYY");
      return `expired on ${date}`;  
    }
  }

  render() {

    return (
      <li className="fridge-item-details">
        <div className="fridge-left">
          <p className="fridge-item-name">{this.props.fridgeItem.name}</p>
          <p className="fridge-item-owner">{this.props.fridgeItem.owner}</p>
        </div>
        <div className="fridge-right">
          <p className="fridge-item-ex">Expiration</p>
          <p className="fridge-item-time">{this.expiration()}</p>
        </div>
      </li>
    );
  }
}

export default FridgeItem; 