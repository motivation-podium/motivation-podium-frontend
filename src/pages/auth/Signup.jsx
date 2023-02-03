import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylePage/signup.css";
import APIUrl from "../../url";
function Signup() {
  let navigate = useNavigate();
  let [UserName, setUserName] = useState("");
  let [Password, setPassword] = useState("");
  let [Name, setFullName] = useState("");
  let [Email, setEmail] = useState("");
  let [Mobile, setMobile] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  function handleSignup() {
    // console.log("started handle");
    if (
      UserName.length > 5 &&
      Password.length > 7 &&
      Name.length > 2 &&
      Email.length > 5 &&
      Mobile.length > 9
    ) {
      // console.log(UserName, Password, Name, Email, Mobile);
      UserName = UserName.toUpperCase();
      UserName = UserName.trim();
      axios.post(APIUrl.UrlSignUpUser , {
          UserName,
          Password,
          Name,
          Email,
          Mobile,
        })
        .then((res) => {
          let err = res.data.err;
          if(err==="Already Exist"){
            setErrorMsg("User Name already taken try with a new one")
          }
          else if (err==="noError"){
            alert("New User is added Going to Login Page")
            navigate("/auth/signin")
          }
          console.log(err);
        })
        .catch();
    } else if (UserName.length <= 5) {
      setErrorMsg("Your UserName is too short ");
    } else if (Password.length <= 7) {
      setErrorMsg("Your Password is less then 8 Charactor");
    } else if (Mobile.length <= 9) {
      setErrorMsg("Your Mobile No is less then 10 Number");
    } else if (Email.length <= 4) {
      setErrorMsg("Your Email is not Valid");
    }else if (Name.length <= 2) {
      setErrorMsg("Your Name should have 3 charactor");
    }
  }
  // let navigate = useNavigate();
  return (
    <div className="page-signup">
      <div className="signupWrapper">
        <h2 className="txt-blue">Welcome !</h2>
        <p>
          <small>
            We are happy to see New users <br />
            Just fill these information to create a new account.
          </small>
        </p>
        <br />
        <div>
          <input
            className="mp-input"
            placeholder="Enter Your Full Name"
            type="text"
            value={Name}
            onChange={(e) => {
              setFullName(e.currentTarget.value);
            }}
            required
          />
          <input
            className="mp-input"
            placeholder="Choose a Unique Username"
            type="text"
            value={UserName}
            onChange={(e) => {
              setUserName(e.currentTarget.value);
            }}
            required
          />
          <input
            className="mp-input"
            placeholder="Enter your Email"
            type="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            required
          />
          <input
            className="mp-input"
            placeholder="Enter your Phone Number"
            type="tel"
            value={Mobile}
            onChange={(e) => {
              setMobile(e.currentTarget.value);
            }}
            required
          />
          <input
            className="mp-input"
            placeholder="Enter Password"
            type="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            required
          />
          <button className="mp-btn" onClick={handleSignup}>
            SignUp
          </button>
        </div>
        <br />
        <div className="userSignupErrorMsg">{errorMsg}</div>
        <br />
      </div>
    </div>
  );
}

export default Signup;
