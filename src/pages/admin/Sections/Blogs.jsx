import React from "react";
import axios from "axios";
import APIUrl from "../../../url";
import "./log.css";
import { useState } from "react";
import { useEffect } from "react";

function Blogs() {
  let [blogArray, setBlogArray] = useState([]);
  useEffect(() => {
    axios
      .get(APIUrl.adminFecthPreBlog)
      .then(function(response) {
        let data = response.data;
        setBlogArray(data.reverse());
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  function handleFinalSubmit(_id, _status, blog) {
    console.log("updating status by put");
    console.log("updating post at finalDb");
    console.log(_id, _status);
    // alert("done status will be updated on next refresh");
    if (blog.Status === true) {
      alert("already present");
      return;
    } else {
      axios
        .put(APIUrl.updatePreBlog, { id: _id, status: _status })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            console.log(blog);
            axios
              .post(APIUrl.uploadFinalBlog, {
                CreatorName: blog.CreatorName,
                CreatorKey: blog.CreatorKey,
                ContentTag: blog.ContentTag,
                ImageUrl: blog.ImageUrl,
                BlogTitle: blog.BlogTitle,
                BlogSummary: blog.BlogSummary,
                BloagDesciption: blog.BloagDesciption,
              })
              .then((res) => {
                if (res.data) {
                  alert("done");
                } else {
                  alert("some problem occuour at backend");
                }
              });
          } else {
            alert("some problem occuour at backend");
          }
        });
    }
  }
  function BlogCard(props) {
    return (
      <div className="card">
        <div>
          <b>BlogTitle--:-- </b>
          {props.item.BlogTitle}
        </div>
        <div>
          <b>CreatorName--:-- </b>
          {props.item.CreatorName}
        </div>
        <div>
          <b>BlogId--:-- </b>
          {props.item._id}
        </div>
        <div>
          <b>Status--:--</b>
          {props.item.Status && "Accepted"}
          {!props.item.Status && "notAccepted"}
        </div>
        <details>
          <summary>Description</summary>
          <div>
            <div>
              <b>URL--:--</b>
              {props.item.ImageUrl}
            </div>
            <div>
              <b>Summary--:--</b>
              {props.item.BlogSummary}
            </div>
            <div>
              <b>Description--:--</b> <br /> {props.item.BloagDesciption}
            </div>
          </div>
        </details>
        <div className="btn-container">
          <button
            className="mp-btn-m"
            onClick={() => {
              handleFinalSubmit(props.item._id, true, props.item);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {blogArray.map((item, index) => {
        return <BlogCard item={item} key={index} />;
      })}
      <p>ldkl</p>
    </div>
  );
}

export default Blogs;
