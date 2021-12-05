import React from "react";
import "./shop.components.css";
import FeaturedProducts from "../../components/featured-products/featured-products.component";

const ShopPage = ({ currentUser, items, addToCart }) => {
  return (
    <div className="shop-container">
      <h1 className="title">Our Products</h1>
      <hr/>
      <div className="featured-products-container">
        {items.map((item) => (
          <FeaturedProducts
            key={item.id}
            item={item}
            currentUser={currentUser}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;