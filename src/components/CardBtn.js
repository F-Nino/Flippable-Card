import React from "react";
class CardBtn extends React.Component {
  render() {
    return (
      <button
        className="tiny ui button"
        type={this.props.type}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}
export default CardBtn;
