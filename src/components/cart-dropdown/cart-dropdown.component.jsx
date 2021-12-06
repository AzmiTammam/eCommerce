import React from 'react'
import "./cart-dropdown.styles.css"
import { Link } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({currentUser,handleHidden,removeCompletely}) => {
    const localUsers = JSON.parse(localStorage.getItem("users"))
    let cart;
    localUsers.forEach(user => {
        if(user.username === currentUser.username && user.password === currentUser.pass){
            cart = user.cartItems
        }
    })
    return (
        <div className="cart-dropdown">
        <div className="cart-items" >
            {cart.length ? cart.map(cartItem => <CartItem removeCompletely={removeCompletely} key={cartItem.id} item={cartItem}/>) : <span className="empty-message">Your cart is empty</span>}
        </div>
        <Link to="/checkout" onClick={handleHidden}><button type="button">
            Go To Checkout
        </button></Link>
    </div>
    )
}

export default CartDropdown
