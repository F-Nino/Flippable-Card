import React, { Component } from "react";

import CardBtn from "./CardBtn";
import CardInput from "./CardInput";
import CardProfileLinks from "./CardProfileLinks";
import CardTextarea from "./CardTextarea";

class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>

          <form formAction="" className="card-form">
            <div className="ui input">
              <CardInput
                name="contactFirstName"
                id="contactFirstName"
                type="text"
                placeholder="Your first name"
              />
            </div>

            <div className="ui input">
              <CardInput
                name="contactLastName"
                id="contactLastName"
                type="text"
                placeholder="Your last name"
              />
            </div>

            <div className="ui input">
              <CardInput
                name="contactEmail"
                id="contactEmail"
                type="email"
                placeholder="Your email address"
              />
            </div>

            <div className="ui input">
              <CardInput
                name="contactSubject"
                id="contactSubject"
                type="text"
                placeholder="Subject"
              />
            </div>

            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />

            <CardBtn type="submit" value="Send message" />
          </form>

          <CardProfileLinks />
        </div>
      </div>
    );
  }
}

export default CardBack;
