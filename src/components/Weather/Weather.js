import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

function Weather(props) {
  async function displayWeather() {
    // let city = this.props.country;
    let apiKey = "3025d0777154910572eb91d5d128c969";

    //make request to url
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        props.country +
        "&appid=" +
        apiKey +
        "&units=metric"
    );
    const data = await response.json();
    console.log(data);
    // console.log(props.country);
    document.getElementById(
      "test"
    ).innerHTML = ` <div class="card mx-auto mt-5" >
          <div class="card-body justify-content-center">
          <div> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/> </div>
              <h5 class="card-title">${data.name}</h5>   
              <span className='temp' >${data.main.temp}</span>     
              <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
              <p className='temp' >humidity: ${data.main.humidity} |  wind: ${data.wind.speed}</p>  
            
          </div>
      </div>`;
    document.getElementById("btn").style.display = "none";
  }
  return (
    <div className="weather-section">
      <button onClick={displayWeather} id="btn">
        show weather
      </button>

      <div id="test"></div>
    </div>
  );
}

export default Weather;
