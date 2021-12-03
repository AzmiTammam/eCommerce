import React from "react";
import "./BackgroundImage.css";
import "bootstrap/dist/css/bootstrap.css";

function BackgroundImage() {
  return (
    <div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: "url(./images/bg.jpg)" }}
      >
        <span> Stylish & Trendy Hats!</span>
        <p>check out our collection now</p>
        <button>Shop</button>
      </div>
    </div>
  );
}

export default BackgroundImage;
