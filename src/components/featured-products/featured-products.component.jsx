import React from 'react'
import "./featured-products.styles.css"

const FeaturedProducts = ({item}) => {
    return (
        <div className="card-container">
             <div className="featured-product-image" style={{
               backgroundImage: `url(${item.imageUrl})`
           }} />
           <div className="collection-footer">
               <span className="name">{item.name}</span>
               <span className="price">${item.price}.00</span>
           </div>
           <div className="desc-button">
           <span className="desc">{item.desc}</span>
           <button type="button" className="add-to-cart-button">ADD TO CART</button>
           </div>
        </div>
    )
}

export default FeaturedProducts
