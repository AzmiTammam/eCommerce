import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

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
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <a href="#featured-products-section">Featured Products</a>
            </li>
            <li>
              <a href="#testimonials-section">Testimonials</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            {this.props.currentUser ? (
              <li>
                <Link to="profile">Profile</Link>
              </li>
            ) : (
              <li>
                <Link to="login">SIGN IN</Link>
              </li>
            )}
          </ul>
          {this.props.currentUser ? (
            <div className="shoppingCart">
              <ShoppingIcon className="shopping-icon" />
              <span className="item-count">0</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
