import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes} from "react-router-dom";
// import CheckBlog from "./checkout/CheckBlog";
// import CheckVideo from "./checkout/CheckVideo";
import "./controlPannel.css";
import ControlPannelComp from "./ControlPannelComp";
import Blogs from "./Sections/Blogs";
import Events from "./Sections/Events";
function ControlPannel() {
  let [controlPannelAccess, setControlPannelAccess] = useState(true);
  let [adminStatus] = useState(sessionStorage.getItem("admin"));
  useEffect(() => {
    if (adminStatus !== "authorised") {
      // console.log("hhhhi");
      setControlPannelAccess(false);
    }
  }, []);
  //   console.log(controlPannelAccess, adminStatus);
  return (
    <div>
      {!controlPannelAccess && (
        <p>You can use this only if you are authorised</p>
      )}
      {controlPannelAccess && (
        <Routes>
          <Route path="" element={<ControlPannelComp/>}></Route>
          <Route path="blogs" element={<Blogs/>}></Route>
          <Route path="videos" element={<p>hi</p>}></Route>
          <Route path="images" element={<p>hi</p>}></Route>
          <Route path="news" element={<p>hi</p>}></Route>
          <Route path="event" element={<Events/>}></Route>
        </Routes>
      )}
    </div>
  );
}

export default ControlPannel;
