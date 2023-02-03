import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylePage/signin.css";

import APIUrl from "../../url"
function Signin() {
  let [userName , setUserName] = useState("")
  let [password , setPassword] = useState("")
  let [errorMsg , setErrorMsg] = useState("")
  let navigate = useNavigate();
 
  function handleLogin(){
    if(userName&&password){
      userName = userName.trim();
      userName = userName.toUpperCase();
      let loginObj = {UserName:userName,Password:password}
      axios.post(APIUrl.UrlSignInUser,loginObj).then(res=>{
        console.log(res.data.err)
        if(res.data.err === "noError"){
          setErrorMsg("")
          let data = res.data ;
          console.log(data)
          console.log("All details are matched");
          localStorage.setItem("isLogin",true)
          localStorage.setItem("Email",data.Email)
          localStorage.setItem("UserName",data.UserName)
          localStorage.setItem("UserObjectId",data.UserObjectId)
          navigate("/home")
        }else{
          setErrorMsg(res.data.err)
        }
      })
    }else{
      console.log("unable to send post request");
      setErrorMsg("Plese fill all the columns")
    }
  }
  return (
    <div className="page-signin">
      <div className="signinWrapper">
        <h2 className="txt-blue">Welcome Back !</h2>
        <p>
          <small>
            Nice to see You , Signin to Your account to access motivation podium
            website.
          </small>
        </p>
        <br />
        <div>
          <input
            className="mp-input"
            placeholder="Enter UserName"
            type="text"
            value={userName}
            onChange={(e)=>{setUserName(e.currentTarget.value)}}
          />
          <input
            className="mp-input"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.currentTarget.value)}}
          />
          <button className="mp-btn" onClick={handleLogin}>SignIn</button>
        </div>
        <br />
        <div className="mp-txt-center">
          <small className="txt-blue">Forget Password ?</small>
        </div>
        <br />
        <div className="userLoginErrorMsg">
          {errorMsg}
        </div>
      </div>
    </div>
  );
}

export default Signin;
