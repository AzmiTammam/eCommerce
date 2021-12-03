import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  showMenu = () => {
    let burgerMenu = document.getElementById("navShow");

    if (burgerMenu.style.display === "none") {
      burgerMenu.style.display = "flex";
    } else {
      burgerMenu.style.display = "none";
    }

    console.log(this);
  };

  render() {
    return (
      <div className="header">
        <a onClick={this.showMenu}>
          <i className="fas fa-bars burgerMenu"></i>
        </a>

        <div className="nav">
          <div className="navCenter">
            <li className="navLogo">i C A P</li>
          </div>
          <ul className="topList" id="navShow">
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Cups&Hats</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">REGISTER</a>
            </li>
            <li>
              <a href="#">SIGN IN</a>
            </li>
          </ul>
          <div className="shoppingCart">
            <ul>
              <li>
                <i className="topIcon fas fa-shopping-cart"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
