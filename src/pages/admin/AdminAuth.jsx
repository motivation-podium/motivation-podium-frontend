import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminAuth.css"
function AdminAuth() {
  let navigate = useNavigate()
  let [userName,setUserName] = useState("")
  let [password,setPassword] = useState("")
  let [errorMsg,setErrorMsg] = useState("")
  function handleAdminAuth(){
    console.log(userName,password)
    if(userName&&password){
      let urlineuron = "https://white-farmer-wuyur.ineuron.app:4000/admin/auth"
      let url = "https://motivationpodiumbackend.onrender.com/admin/auth"
      axios.post(url,{Username:userName,Password:password}).then(res=>{
        console.log(res.data)
        if(res.data.msg==="Approved"){
          sessionStorage.setItem("admin","authorised")
          navigate("/admin/controlpannel")
        }else{
          setErrorMsg("Your request is declined")
        }
      }
      )
    }
    else{
      setErrorMsg("Data cant be Empty")
      return ;
    }
  }
  return (
    <div>
      <div className="page-admin-auth">
        <div className="adminAuthWrapper">
          <h2 className="txt-blue">Login in as Admin</h2>
          <p>
            <small>
              Nice to see You , Signin to Your account to access motivation
              podium control pannel.
            </small>
          </p>
          <br />
          <div>
            <input
              className="mp-input"
              placeholder="Enter UserName"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
            <input
              className="mp-input"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <button className="mp-btn" onClick={handleAdminAuth}>
              Login as Admin
            </button>
          </div>
          <br />
          <div className="mp-txt-center">
            <small className="txt-blue">In case You forget password plese contact developer</small>
          </div>
          <br />
          <div className="userLoginErrorMsg">{errorMsg}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
