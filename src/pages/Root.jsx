import React from "react";
import { useNavigate } from "react-router-dom";
function Root() {
  let navigate = useNavigate();
  setTimeout(() => {
    let isLogin = localStorage.getItem("isLogin");
    console.log(isLogin);
    // isLogin = false
    isLogin ? navigate("/home") : navigate("/getStarted");
  }, 10);
  return (
    <div>
      <p>Welocme to root page</p>
      <p>You will be redirected Soon</p>
    </div>
  );
}

export default Root;
