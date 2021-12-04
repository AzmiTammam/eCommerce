import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarActive: false
    }
  }
  showMenu = () => {
    let changeActive = !this.state.navBarActive
    this.setState({navBarActive: changeActive})
    this.props.changeHiddenOnce()
  };

  render() {
    const localUsers = JSON.parse(localStorage.getItem("users"))
    let counter = 0;
    if(this.props.currentUser){
      localUsers.forEach(user => {
          if(user.username === this.props.currentUser.username && user.password === this.props.currentUser.pass){
              let cart = user.cartItems
              console.log(cart)
              cart.map(item => counter += item.quantity)    
          }
      })
    }
    return (
      <div className="header">
        <div onClick={this.showMenu}>
          <i className="fas fa-bars burgerMenu"></i>
        </div>

        <div className="nav">
          <div className="navCenter">
            <li className="navLogo">i C A P</li>
          </div>
          <ul className={`${this.state.navBarActive ? "activeBurger" : ""} topList`}>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#featured-products-section">Featured Products</a>
            </li>
            <li>
              <a href="#testimonials-section">Testimonials</a>
            </li>
            {this.props.currentUser ?  <li>
              <Link to="profile">Profile</Link>
            </li> : <li>
              <Link to="login">SIGN IN</Link>
            </li>}  
          </ul>
          {this.props.currentUser ? <div className="shoppingCart" onClick={this.props.handleHidden}>
              <ShoppingIcon className="shopping-icon"/>
              <span className="item-count">{counter}</span>
          </div> : null}
          
        </div>
        {this.props.hidden ? null : <CartDropdown currentUser={this.props.currentUser} handleHidden={this.props.handleHidden}/>}
      </div>
    );
  }
}
