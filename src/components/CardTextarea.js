import React from "react";

class CardTextarea extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea
            rows="2"
            name={this.props.name}
            id={this.props.id}
            placeholder={this.props.placeholder}
            required
          />
        </div>
      </div>
    );
  }
}

export default CardTextarea;
