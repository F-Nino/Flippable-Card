import React from "react";
class CardInput extends React.Component {
  render() {
    return (
      <input
        name={this.props.name}
        id={this.props.id}
        type={this.props.type || "text"}
        placeholder={this.props.placeholder}
        required
      />
    );
  }
}
export default CardInput;
