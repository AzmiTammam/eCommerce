import React from 'react'
import "./cart-item.styles.css"

const CartItem = ({item,removeCompletely}) => {
    const {imageUrl, price, name,quantity} = item
    return (
        <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="item-name">{name}</span>
            <span className="item-price">{quantity} x ${price}</span>
        </div>
        <div className="remove-button-dropdown" onClick={() => removeCompletely(item)}>&#10005;</div>
    </div>
    )
}

export default CartItem
