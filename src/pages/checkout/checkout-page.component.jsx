import React from 'react'
import "./checkout.styles.css"
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({currentUser,addToCart,removeItemFromCart,removeCompletely}) =>  {
   
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
            {cart.map(element => <CheckoutItem key={element.id} cartItem={element} removeCompletely={removeCompletely} addToCart={addToCart} removeItemFromCart={removeItemFromCart} />)}
            {/* {localUsers.forEach(user => {
                if(user.username === currentUser.username && user.password === currentUser.pass){
                    console.log(user.cartItems)
                    user.cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
                }
            })} */}
            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
        )
}

export default CheckoutPage
