import React from "react";
import "./styleUserMain/PageUserImage.css";
function Image() {
  let arrayUserImage = [
    [
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "","",""
    ],
    [
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
    ],
    [
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
    ],
    [
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
    ],
    [
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
      "https://cdn.pixabay.com/photo/2022/11/20/18/32/snowdrop-7604920_960_720.jpg",
    ],
  ];
  return (
    <div className="page-userImage">
      {arrayUserImage.map((arrayItem, index) => {
        return (
          <div key={index} className="imageContainer">
            <div className="imageContainer-img">
              {arrayItem.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="imageContainer-title">
              <p><b>by bhuvan</b></p>
              <p>Such a good fool</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Image;
