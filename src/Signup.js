import React from "react";
import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState("");
  const [passworderror, setPasswordError] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (password !== confpassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    console.log("firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confpassword:", confpassword);
    console.log("DOB:", dob);
    console.log("Gender:", gender);
  };

  return (
    <>
      <div className="register">
        <div className="register_head">
          <center>
            <h1> Sign up</h1>
            <p> it's quick and easy</p>
          </center>
        </div>
        <form onSubmit={register}>
          <div className="row">
            <input
              className="register_name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              className="register_name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <center>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </center>
          <div>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              required
            />
            <input
              type="text"
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="confirm Password"
              required
            />
            {passworderror && (
              <p className="warning">*Password doesn't match</p>
            )}
          </div>

          <h5>Date of Birth</h5>
          <div className="DOB">
            <select
              className="register_date1"
              onChange={(e) => setDob([...dob, e.target.value])}
            >
              <option value="Date"> Date</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select
              className="register_date2"
              onChange={(e) => setDob([...dob, e.target.value])}
            >
              <option value="Month">Month</option>
              <option value="1">JAN</option>
              <option value="2">FEB</option>
              <option value="3">MAR</option>
              <option value="4">APR</option>
              <option value="5">MAY</option>
              <option value="6">JUN</option>
              <option value="7">JUL</option>
              <option value="8">AUG</option>
              <option value="9">SEP</option>
              <option value="10">OCT</option>
              <option value="11">NOV</option>
              <option value="12">DEC</option>
            </select>
            <select
              className="register_date3"
              onChange={(e) => setDob([...dob, e.target.value])}
            >
              <option value="Year">Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <h5>Gender</h5>
          <div className="register_radio">
            <div className="gender-radio">
              <label>Male</label>
              <input
                type="radio"
                onChange={(e) => setGender(e.target.value)}
                id="male"
                name="gender"
                value="male"
              />

              <label>Female</label>
              <input
                type="radio"
                onChange={(e) => setGender(e.target.value)}
                id="female"
                name="gender"
                value="female"
              />

              <label>Other</label>
              <input
                type="radio"
                onChange={(e) => setGender(e.target.value)}
                id="other"
                name="gender"
                value="other"
              />
            </div>
          </div>

          <div className="register_test">
            <center>
              <p>
                By clicking on the{" "}
                <span> Terms, Data Policy and Cookie Policy</span> <br />
                You may recive SMS notification and can opt at any time
              </p>
            </center>
          </div>
          <center>
            <button
              type="submit"
              onClick={register}
              className="register_register"
            >
              Sign Up
            </button>
            <Link to="/">
              {" "}
              <p className="register_login"> Already a user</p>{" "}
            </Link>
          </center>
        </form>
      </div>
    </>
  );
}
export default Signup;
