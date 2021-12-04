/* eslint-disable no-unused-vars */
import React from "react";
import './style.css'

function Login({handleCurrentUser}) {
  const loginUsersFN = (e) => {
    e.preventDefault();

    const loginUserName = document.getElementById("loginUserName").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const localData = JSON.parse(localStorage.getItem("users"));
    console.log(localData);

    let flag = false;
    for (const i in localData) {
      if (
        localData[i].username === loginUserName &&
        localData[i].password === loginPassword
      ) {
        flag = true;
      }
    }
    if (flag === true) {
      let logged = true;
      handleCurrentUser(loginUserName, loginPassword)
      document.getElementById('pswUsr').style.display='none'
    } else {
      document.getElementById('pswUsr').innerHTML="The Password or username is incorrect"
    }
  };
  function showPassword() {
    let showPassword = document.getElementById("loginPassword");
    if (showPassword.type === "password") {
      showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
  }
  return (
    <div className="loginMain">
        <div className="Container11">
        <h1 className="heading">Sign in</h1>
        <form name="login">
        <div className="CustomStyle">
              <input type="text" placeholder="Username" name="username" id="loginUserName" />
            </div>
            <div className="CustomStyle">
              <input type="password" placeholder="Password" name="password" id="loginPassword"/>
            </div>
            <div>
              <span id="noUsr" className="pswUsr"></span>
              <span id="pswUsr" className="pswUsr"></span>
            </div>
            <div className="showPassword">
              <input type="checkbox" id="pswShow" name="pswShow" onClick={showPassword} /> <label htmlFor="pswShow">Show password</label>
            </div>
            <input type="submit" value="Sign in" className="css-button-rounded--red" onClick={loginUsersFN} />
          </form>
        </div>
    </div>
  );
}

export default Login;
