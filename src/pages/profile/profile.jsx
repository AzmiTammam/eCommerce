import React, { Component } from "react";

import "./profile.styles.css";
import "bootstrap/dist/css/bootstrap.css";
const apiKey = "3025d0777154910572eb91d5d128c969";


class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      weatherData: null,
      error: null,
      myCountry: "Jordan",
      localUsers: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    }
  }
  
  async componentDidMount(){
    
    for (const i in this.state.localUsers) {
      if(this.props.currentUser){
        if (
          this.state.localUsers[i].username === this.props.currentUser.username &&
          this.state.localUsers[i].password === this.props.currentUser.pass
        ){
          console.log(this.state.localUsers)
        await this.setState({myCountry: this.state.localUsers[i].country})
        console.log(this.state.myCountry)
        }
      }
    }
    
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.myCountry +
          "&appid=" +
          apiKey +
          "&units=metric"
      );
      const data = await response.json();
      console.log(data)
      this.setState({weatherData: data})
    // } catch (err){
    //   this.setState({error: err.message})
    // }
  }
  render() {
    let cartAndUser;
    this.state.localUsers.forEach(user => {
      if(this.props.currentUser){
        if(user.username === this.props.currentUser.username && user.password === this.props.currentUser.pass){
          cartAndUser = user
        }
      }
    })
        return (
          <div>
            {this.props.currentUser ? <div>
              <div className="profile">
            <div className="text">
              <h1>My Account</h1>
              <p>
                Hello <span style={{fontWeight:"bolder",color:"brown"}}>{cartAndUser.username}</span> , here you can view your personal information and
                purchases
              </p>
              <div className="personal-info">
                <h2>Personal Information</h2>
                <label>Username:</label>
                <input type="text" value={cartAndUser.username} disabled />
                <label>Email:</label>
                <input type="text" value={cartAndUser.email} disabled />
                <label>Phone:</label>
                <input type="text" value={cartAndUser.phone} disabled />
                <label>Country:</label>
                <input type="text" value={cartAndUser.country} disabled />
              </div>
            </div>
            <div className="weather-section"> 
            <div class="card mx-auto mt-5" >
          <div class="card-body justify-content-center">
          <div> <img src={`https://openweathermap.org/img/wn/${this.state.weatherData && this.state.weatherData.weather[0].icon}.png`}/> </div>
              <h5 class="card-title">{this.state.weatherData && this.state.weatherData.name}</h5>   
              <span className='temp' >{this.state.weatherData && this.state.weatherData.main.temp}C</span>     
              <p class="card-text ">Weather conditions are described as: {this.state.weatherData && this.state.weatherData.weather[0].description}</p>
              <p className='temp' >humidity: {this.state.weatherData && this.state.weatherData.main.humidity} |  wind: {this.state.weatherData && this.state.weatherData.wind.speed}</p>  
            
          </div>
      </div>
            </div>   
          </div>
          <div className="container">
          <h2 className="purchase">My Cart Items</h2>
          <div className="added-items ">
              {cartAndUser.cartItems.map((item,ind)=>{return (<div key={ind}>
                 <div><img src={item.imageUrl} alt="item" /> </div>
                 <p className="name_">{item.name} <br/><span> X {item.quantity} </span> </p>
              </div>)})}
          </div>
          </div>
            </div> : <p>You are not logged in and therefore not allowed in this page</p>}
              
          </div>
         
        );
      }
     
}
   
export default Profile;