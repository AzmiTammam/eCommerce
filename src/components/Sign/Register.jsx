import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Register() {
  const registerUsersArray = JSON.parse(localStorage.getItem("users"));
  const registerUsersFN = (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value

    let users = {
      username: username,
      password: password1,
      email: email,
      phone: phone,
      country: country,
      cartItems: [],
    };

    if (password1 !== password2) {
      document.getElementById("errMsgPsw").style.display = "block";
      document.getElementById("errMsgPsw").innerHTML =
        "The passwords doesn't match";
    } else if (password1.length < 6) {
      document.getElementById("errMsgPsw").style.display = "block";
      document.getElementById("errMsgPsw").innerHTML =
        "The passwords must be more than 6";
    } else if (username.length < 4) {
      document.getElementById("errMsgUsr").style.display = "block";
      document.getElementById("errMsgUsr").innerHTML =
        "The username must be more than 4";
    } else if (phone.length < 9) {
      document.getElementById("errMsgPhone").style.display = "block";
      document.getElementById("errMsgPhone").innerHTML = "The phone number must be 9 numbers"
    } else if(country === "none"){
      document.getElementById("errMsgCountry").style.display = "block";
      document.getElementById("errMsgCountry").innerHTML = "Please select a country"
    }
    else {
        let flag = false;
        for (const i in registerUsersArray) {
          if (
            registerUsersArray[i].username === username ||
            registerUsersArray[i].phone === phone
          ) {
            flag = true;
          }
        }
        if (flag === true) {
          alert("This username or phone number is already used")
        } else {
          document.getElementById("errMsgPsw").style.display = "none";
          document.getElementById("errMsgUsr").style.display = "none";
          document.getElementById("errMsgPhone").style.display = "none";
          document.getElementById("errMsgCountry").style.display = "none";
          alert('Successfully registered')
          if(registerUsersArray){
            registerUsersArray.push(users);
            localStorage.setItem("users", JSON.stringify(registerUsersArray));
          } else localStorage.setItem("users", JSON.stringify([users]));
        }
    }

  };
  return (
    <div className="registerMain">
      <div>
        <h1 className="heading">Sign up</h1>
        <form name="register" onSubmit={registerUsersFN }>
          <div className="CustomStyle">
            <input type="text" placeholder="Username" id="username" required />
          </div>
          <div className="CustomStyle">
            <input type="password" placeholder="Password" name="password1" id="password1" required
            />
          </div>
          <div className="CustomStyle">
          <input type="password" placeholder="Confirm password" name="password2" id="password2" required
            />
          </div>
          <div className="CustomStyle">
            <input type="email" placeholder="Email" id="email" required />
          </div>
          <div className="CustomStyle">
            <input type="number" placeholder="Phone" id="phone" maxLength="13" minLength="9" required />
          </div>
          <div>
            <select name="country" id="country" required>
              <option value="none" selected disabled>Select A Country</option>
              <option value="Jordan">Jordan</option>
              <option value="Egypt">Egypt</option>
              <option value="Syria">Syria</option>
              <option value="Qatar">Qatar</option>
              <option value="Kuwait">Kuwait</option>
            </select>
          </div>
          <div>
            <p id="errMsgPsw" className="errMsg"></p>
            <p id="errMsgUsr" className="errMsg"></p>
            <p id="errMsgPhone" className="errMsg"></p>
            <p id="errMsgCountry" className="errMsg"></p>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="submitButton btn-primary text-center"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
