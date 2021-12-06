import React from 'react'
import "./checkout.styles.css"
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {Link} from "react-router-dom"

const CheckoutPage = ({currentUser,addToCart,removeItemFromCart,removeCompletely,removeEverything}) =>  {
   
    const localUsers = JSON.parse(localStorage.getItem("users"))
    let cart;
    let total = 0
    localUsers.forEach(user => {
        if(user.username === currentUser.username && user.password === currentUser.pass){
            cart = user.cartItems
            cart.map(item => total += item.price * item.quantity)
        }
    })
        return (
            <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cart.length ? null : <div className="empty-message-checkout">
                <h1>Your Cart Is Empty</h1>
                <Link to="/shop"><button type="button" className="go-to-shop">Go To Shop</button></Link>
                </div>}
            {cart.map(element => <CheckoutItem key={element.id} cartItem={element} removeCompletely={removeCompletely} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />)}
            {/* {localUsers.forEach(user => {
                if(user.username === currentUser.username && user.password === currentUser.pass){
                    console.log(user.cartItems)
                    user.cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
                }
            })} */}
            <div className="total">
                <span>Total: ${total}</span>
                {cart.length ? <button type="button" className="confirm-buy" onClick={removeEverything}>Confirm Purchase</button>: null}
            </div>
        </div>
        )
}

export default CheckoutPage
