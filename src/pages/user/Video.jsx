import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import "./styleUserMain/pageUserVideo.css";
function Video() {
  let arrayVideo = [
    {
      vdoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      description: "dks sdksdj fjkfv ",
      imageUrl: "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      title: "vjkdfvdu",
    },
    {
      vdoUrl: "https://youtu.be/lgSKlg9nBI0",
      description: "dks sdksdj fjkfv ",
      imageUrl: "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      title: "vjkdfvdu sdvs",
    },
    {
      vdoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      description: "dks sdksdj fjkfv ",
      imageUrl: "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      title: "vjkdfvdu",
    },
    {
      vdoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      description: "dks sdksdj fjkfv ",
      imageUrl: "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      title: "vjkdfvdu",
    },
  ];
  let [videoUrl, setVideoUrl] = useState(arrayVideo[1].vdoUrl);
  function handleVdoCardClick(str){
    console.log(str)
    setVideoUrl(str)
  }
  return (
    <div className="page-userVideo">
      <div className="playerContainer">
      <ReactPlayer
          url= {videoUrl}
          className="ReacrtPlayer"
          controls={true}
        />
      </div>
      <div className="moreVideos">
        {arrayVideo.map((arrayItem, index) => {
          return (
            <div key={index} className="vdoCard" onClick={()=>{handleVdoCardClick(arrayItem.vdoUrl)}}>
              <div className="vdodiv">
                <img
                  src={arrayItem.imageUrl}
                  alt="unable to fetch cideo from servers"
                />
              </div>
              <div className="vdocardtext">
                <h4>{arrayItem.title}</h4>
                <p>{arrayItem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Video;
