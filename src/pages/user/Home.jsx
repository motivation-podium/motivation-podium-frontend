import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import HomeStart from "./HomeStart";
import Video from "./Video"
import Image from "./Image"
import News from "./News"
import Profile from "./other/Profil"
import Bookmark from "./other/Bookmark"
import Creator from "./other/Creator"
import Language from "./other/Language"
import Notification from "./other/Notification"
import Premium from "./other/Premium"
import Setting from "./other/Setting"
import Shop from "./other/Shop"
// import Shop from "./other/Shop"
import HomeNavbar from "../../components/HomeNavbar";
import "../stylePage/home.css";
function Home() {
  return (
    <div className="page-home">
      <div className="homeWrapper">
        <div className="homeAside"><HomeNavbar/></div>
        <div className="homeMain">
          <div className="homeHeader">Motivation Podium</div>
          <div className="homeSection">
            <Routes>
              <Route path="" element={<HomeStart/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="news" element={<News/>}/>
              <Route path="blogs" element={<Blog/>}/>
              <Route path="images" element={<Image/>}/>
              <Route path="videos" element={<Video/>}/>
              <Route path="creator" element={<Creator/>}/>
              <Route path="premium" element={<Premium/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="setting" element={<Setting/>}/>
              <Route path="language" element={<Language/>}/>
              <Route path="bookmark" element={<Bookmark/>}/>
              <Route path="notification" element={<Notification/>}/>
            </Routes>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
