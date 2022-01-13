import React from "react";
import "./BackgroundImage.css";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom"

function BackgroundImage() {
  return (
    <div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})` }}
      >
        <span> Stylish & Trendy Hats!</span>
        <p>Check out our collection now</p>
        <Link to="/shop"><button>Shop</button></Link>
      </div>
    </div>
  );
}

export default BackgroundImage;
