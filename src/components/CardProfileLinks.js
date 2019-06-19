import React from "react";

const listStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0
};

class CardProfileLinks extends React.Component {
  render() {
    return (
      <div className="card-social-links">
        <ul style={listStyle}>
          <li>
            <i className="linkedin icon" />
          </li>
          <li>
            <i className="twitter icon" />
          </li>
          <li>
            <i className="github icon" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CardProfileLinks;
