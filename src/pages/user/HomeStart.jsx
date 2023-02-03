import React from "react";
import "./styleUserMain/homeStart.css";
function HomeStart() {
  let arrayofEvent = [
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
    {
      img: "https://picsum.photos/id/54/400/300",
      title: "sdsd",
      author: "asasd",
    },
  ];
  return (
    <div className="page-homeStart">
      {arrayofEvent.map((arrayItem, index) => {
        return (
          <div key={index}>
            <div className="homeStartcard">
              <img src={arrayItem.img} alt=""/>
              <div className="homeStartcard-body">
                <h2>{arrayItem.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <h5>{arrayItem.author}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeStart;
