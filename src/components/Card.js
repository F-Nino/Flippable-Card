import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import "../styles/Card.css";
class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardBack />

          <CardFront />
        </div>
      </div>
    );
  }
}

export default Card;
