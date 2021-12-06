import React from 'react'
import "./checkout-item.styles.css"

const CheckoutItem = ({cartItem,removeItemFromCart,addToCart,removeCompletely}) => {
    const {name, imageUrl, price,quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="checkout-name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price * quantity}</span>
            <div className="remove-button" onClick={() => removeCompletely(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem