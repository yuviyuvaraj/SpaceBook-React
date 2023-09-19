import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="Login">
        <div className="Facebook">
          <div className="Spacebooktext">
            <h1>Space Book</h1>
          </div>
          <div className="title">
            <p>
              Spacebook helps you to connect and <br />
              share with thhe people in your life
            </p>
          </div>
        </div>
        <div className="Logincontainer">
          <div className="logindetails">
            <input
              type="text"
              placeholder="Enter address or phone number"
              name="email"
            />
            <br />
            <input type="text" placeholder="Password" name="password" />
            <br />
            <Link to="/Home" className="btn">
              <strong>LOGIN</strong>
            </Link>
          </div>
          <div className="Forget">
            <a href="forget">Forget Password ?</a>
            <br />
          </div>
          <div>
            <center>
              <Link to="/Signup" className="btns">
                <strong>Create New Account</strong>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
