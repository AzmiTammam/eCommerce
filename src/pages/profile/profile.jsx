import React, { Component } from "react";
import "./Profile.styles.css";

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="text">
          <h1>My Account</h1>
          <p>
            Hello, userName Here you can view your personal information and
            purchases
          </p>
        </div>
        <div className="weather"></div>
      </div>
    );
  }
}

export default Profile;