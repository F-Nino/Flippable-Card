import React, { Component } from "react";
import AuLogo from "../AuLogo.png";

class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="content">
            <img className="ui small circular image" src={AuLogo} />
            <h2>Felipe Nino</h2>

            <h1>Web Designer</h1>

            <p>
              Currently an undergrade at Aurora University majoring in computer
              science.
            </p>

            <p>
              He is currently the founder of Dvorak Media. Previously, Andrey
              was a product designer at Dropbox.
            </p>

            <p>
              Over the years, Michael has been priviledged to have worked with
              Adobe, Evernote, Square and more.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFront;
