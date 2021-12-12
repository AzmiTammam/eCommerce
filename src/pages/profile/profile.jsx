import React, { Component } from "react";
import Weather from "../../components/Weather/Weather";
import "./profile.styles.css";
import "bootstrap/dist/css/bootstrap.css";

export class Profile extends Component {
  constructor(props){
    super(props);
    this.state=""
  }
  render() {
    const localData = JSON.parse(localStorage.getItem("users"));
  
    
    for (const i in localData) {
      if (
        localData[i].username === this.props.currentUser.username &&
        localData[i].password === this.props.currentUser.pass
      ) {
        console.log(localData[i].cartItems)
        return (
          <div>
              <div className="profile">
            <div className="text">
              <h1>My Account</h1>
              <p>
                Hello <span style={{fontWeight:"bolder",color:"brown"}}>{localData[i].username}</span> , here you can view your personal information and
                purchases
              </p>
              <div className="personal-info">
                <h2>Personal Information</h2>
                <label>Username:</label>
                <input type="text" value={localData[i].username} disabled />
                <label>Email:</label>
                <input type="text" value={localData[i].email} disabled />
                <label>Phone:</label>
                <input type="text" value={localData[i].phone} disabled />
                <label>Country:</label>
                <input type="text" value={localData[i].country} disabled />
              </div>
            </div>
            <div className="weather"><Weather country={localData[i].country}/> </div>   
          </div>
          <div className="container">
          <h2 className="purchase">My Cart Items</h2>
          <div className="added-items ">
              {localData[i].cartItems.map((item)=>{return (<div>
                 <div><img src={item.imageUrl} alt="item" /> </div>
                 <p className="name_">{item.name} <br/><span> X {item.quantity} </span> </p>
              </div>)})}
          </div>
          </div>
          </div>
         
        );
      }
     
    }
   

  
  }
}

export default Profile;