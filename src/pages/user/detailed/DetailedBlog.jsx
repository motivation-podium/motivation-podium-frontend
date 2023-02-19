import React from "react";
import "./detailedBlogPage.css";
function DetailedBlog() {
  let blog = localStorage.getItem("blog");
  blog = JSON.parse(blog);
  console.log(blog);
  return (
    <div className="detailedBlogPage">
      <div className="sideSpace headDetailedBlog">
        <h3>{blog.BlogTitle}</h3>
        <p><small>Tag : {blog.ContentTag}</small></p>
        <p>
          <small>By : {blog.CreatorName}</small>
        </p>
      </div>
      <hr className="hrlight"/>
      <div className="sideSpace">
        <div className="img">
          <img src={blog.ImageUrl} alt="" />
        </div>
      </div>
        <hr className="hrlight"/>
        <div className="sideSpace">
        <details>
          <summary>Summary</summary>
          <p>{blog.BlogSummary}</p>
        </details>
        </div>
        <hr />
        <div className="sideSpace">
        <div dangerouslySetInnerHTML={{ __html: blog.BloagDesciption }} className='sidespaceDetailedBlog'></div>
        </div>
    </div>
  );
}

export default DetailedBlog;
