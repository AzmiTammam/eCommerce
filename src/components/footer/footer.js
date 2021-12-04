import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="about">
          <h1 className="aboutTitle">i C A P</h1>
          <p className="aboutPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="aboutIcon">
            <a href="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square">   </i></a>
            <a href="https://www.instagram.com/"><i className="topIcon fab fa-instagram-square"> </i></a>
            <a href="https://www.pinterest.com/"><i className="topIcon fab fa-pinterest-square"> </i></a>
            <a href="https://twitter.com/?lang=ar"><i className="topIcon fab fa-twitter-square"> </i></a>
          </div>
        </div>
        <div className="contatUs">
          <h1 className="contatUsTitle">Contact US</h1>
          <p className="contatUsPara">Amman/Jordan</p>
          <p className="contatUsPara">+962788782010</p>
          <p className="contatUsPara">icap@gmail.com</p>
        </div>
      </div>
    );
  }
}
