import React from "react";
import "./shop.components.css";
import FeaturedProducts from "../../components/featured-products/featured-products.component";

const ShopPage = ({ currentUser, items }) => {
  return (
    <div>
      <h1 className="title">Our products</h1>
      <span className="line"></span>
      <div className="featured-products-container">
        {items.map((item) => (
          <FeaturedProducts
            key={item.id}
            item={item}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;