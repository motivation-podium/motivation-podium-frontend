import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import APIUrl from "../../url";
import "./styleUserMain/pageUserBlog.css";
function Blog() {
  let [arrayBlog,setarrayBlog]=useState([])
  useEffect(()=>{
    axios.get(APIUrl.fetchFinalBlog).then((res)=>{
      let data = res.data
      data.reverse();
      console.log(data)
      setarrayBlog(data)
    })
  },[])
  return (
    <div className="page-userBlog">
      {arrayBlog.map((arrayItem, index) => {
        return (
          <div key={index} className="blogCard">
            <div className="imgdiv">
              <img src={arrayItem.ImageUrl} alt="user not uploaded" />
            </div>
            <div className="blogcardtext">
              <p><b>{arrayItem.BlogTitle}</b></p>
              <p><small>{arrayItem.CreatorName}</small></p>
              <p>{arrayItem.BlogSummary}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
