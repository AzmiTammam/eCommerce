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
  return (
    <div className="loginMain">
        <div>
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
            <input type="submit" value="Sign in" className="submitButton" onClick={loginUsersFN} />
          </form>
        </div>
    </div>
  );
}

export default Login;
