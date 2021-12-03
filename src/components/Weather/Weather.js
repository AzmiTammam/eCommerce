import React, { Component } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

class Weather extends Component {
  constructor() {
    super();
  }
  render() {
    async function displayWeather() {
      let city = document.getElementById("cityName").value;
      let apiKey = "3025d0777154910572eb91d5d128c969";

      //make request to url
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          apiKey
      );
      const data = await response.json();
      console.log(data);
      document.getElementById("test").innerHTML = 
        
      <div class="card mx-auto mt-5" style="width: 18rem;">
          <div class="card-body justify-content-center">
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
              <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>

          </div>
      </div>
      ;
    }
    return (
      <div>
        <input type="text" id="cityName" placeholder="Enter a city name" />
        <br />
        <input
          type="submit"
          value="Get Weather Information"
          id="weather_data"
          onClick={displayWeather}
        />
        <div id="test"></div>
      </div>
    );
  }
}
export default Weather;