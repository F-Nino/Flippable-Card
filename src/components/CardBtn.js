import React from "react";
class CardBtn extends React.Component {
  render() {
    return (
      <button
        className="ui primary button"
        type={this.props.type}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}
export default CardBtn;
