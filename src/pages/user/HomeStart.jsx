import axios from "axios";
import React, { useEffect } from "react";
import "./styleUserMain/homeStart.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import APIUrl from "../../url";
function HomeStart() {
  //fetchFinalEvent
  let [arrayEvent,setArrayEvent] = useState([]);

  useEffect(()=>{
    axios.get(APIUrl.fetchFinalEvent).then((res)=>{
      let data = res.data
      data.reverse();
      console.log(data)
      setArrayEvent(data)
      // sa(arrayBlog[0].BloagDesciption)
    })
  },[])
  return (
    <div className="page-homeStart">
      {arrayEvent.map((arrayItem, index) => {
        return (
          <div key={index}>
            <div className="homeStartcard">
              <div className="homeEventCardImg"><img src={arrayItem.ImageUrl} alt=""/></div>
              <div className="homeStartcard-body">
                <h2>{arrayItem.EventTitle}</h2>
                <p>
                  {arrayItem.EventSummary}
                </p>
                {/* <h5>{arrayItem.author}</h5> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeStart;
// EventSummary
// : 
// "Yoo"
// EventTitle
// : 
// "Arora"
// ImageUrl
// : 
// "Karan"