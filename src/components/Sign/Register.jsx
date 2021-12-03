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
        "The passwords doesn't match 🤣";
    } else if (password1.length < 6) {
      document.getElementById("errMsgPsw").style.display = "block";
      document.getElementById("errMsgPsw").innerHTML =
        "The passwords must be more than 6";
    } else if (username.length < 4) {
      document.getElementById("errMsgUsr").style.display = "block";
      document.getElementById("errMsgUsr").innerHTML =
        "The username must be more than 4";
    } else {
      document.getElementById("errMsgPsw").style.display = "none";
      document.getElementById("errMsgUsr").style.display = "none";

      registerUsersArray.push(users);
      localStorage.setItem("users", JSON.stringify(registerUsersArray));
      
    }
  };
  return (
    <div className="registerMain">
      <div>
        <h1 className="heading">Sign up</h1>
        <form name="register">
          <div className="CustomStyle">
            <input type="text" placeholder="Username" id="username" required />
          </div>
          <div className="CustomStyle1">
            <input
              type="password"
              placeholder="Password"
              name="password1"
              id="password1"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              id="password2"
              required
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
              <option value="jordan">Jordan</option>
              <option value="Egypt">Egypt</option>
              <option value="Syria">Syria</option>
              <option value="UAE">UAE</option>
            </select>
          </div>
          <div className="alreadyMsg">
            <Link to="/login" className="text-decoration-none">
              Already Have Account?
            </Link>
          </div>
          <div>
            <p id="errMsgPsw" className="errMsg"></p>
            <p id="errMsgUsr" className="errMsg"></p>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="submitButton btn-primary text-center"
            onClick={registerUsersFN}
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
