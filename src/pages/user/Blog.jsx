import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import APIUrl from "../../url";
import "./styleUserMain/pageUserBlog.css";
function Blog() {
  let [arrayBlog,setarrayBlog]=useState([])
  let navigate = useNavigate();
  // let [a,sa] = useState();
  useEffect(()=>{
    axios.get(APIUrl.fetchFinalBlog).then((res)=>{
      let data = res.data
      data.reverse();
      console.log(data)
      setarrayBlog(data)
      // sa(arrayBlog[0].BloagDesciption)
    })
  },[])
  function handleblog(blog){
    navigate("detailedBlog")
    console.log(blog);
    localStorage.setItem("blog",JSON.stringify(blog))
  }
  return (
    <div className="page-userBlog">
      {arrayBlog.map((arrayItem, index) => {
        return (
          <div key={index} className="blogCard" onClick={()=>{handleblog(arrayItem)}}>
            <div className="imgdiv">
              <img src={arrayItem.ImageUrl} alt="user not uploaded" />
            </div>
            <div className="blogcardtext">
              <h3>{arrayItem.BlogTitle}</h3>
              <p className="author"><small>By - {arrayItem.CreatorName}</small></p>
              <p className="summary">{arrayItem.BlogSummary}</p>
            {/* <div dangerouslySetInnerHTML={{__html:arrayItem.BloagDesciption}}></div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
