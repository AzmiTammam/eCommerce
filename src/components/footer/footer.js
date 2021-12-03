import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="about">
          <h1 className="aboutTitle">i C A P</h1>
          <p className="aboutPara">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry. <br /> Lorem Ipsum has
            been the industry's standard dummy <br /> text ever since the 1500s.
          </p>
          <div className="aboutIcon">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
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
