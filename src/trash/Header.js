import React, { Component } from "react";
import Nav from "./Nav";
import logo from "./logo.svg";
import avatar from "./avatar.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <img src={logo} className="logo-header" alt="logo" />
        <div>
          <input type="text" />
          <img src={avatar} className="avatar-header" alt="avatar" />
        </div>
      </header>
    );
  }
}
