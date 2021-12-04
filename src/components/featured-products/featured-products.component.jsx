import React from "react";
import "./featured-products.styles.css";

const FeaturedProducts = ({ item, currentUser, addToCart }) => {
  return (
    <div className="card-container" id="featured-products-section">
      <div
        className="featured-product-image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}.00</span>
      </div>

      <div className="desc-button">
        <span className="desc">{item.desc}</span>
        {currentUser ? (
          <button
            type="button"
            className="add-to-cart-button"
            onClick={() => addToCart(item)}
          >
            ADD TO CART
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedProducts;
