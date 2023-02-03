import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import "./blog-upload.css";
import { useQuill } from "react-quilljs";
import axios from "axios";
import APIUrl from "../../url";
import { useNavigate } from "react-router-dom";
function BlogUpload() {
  let navigate = useNavigate()
  const { quill, quillRef } = useQuill();

  let [creatorName, setcreatorName] = useState("");
  let [referenceTag, setreferenceTag] = useState("");
  let [imageUrl, setimageUrl] = useState("");
  let [title, setTitle] = useState("");
  let [summary, setsummary] = useState("");
  let [value, setValue] = useState("");

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);
  function handlePost() {
    console.log(creatorName, referenceTag, imageUrl, title, summary, value);
    if(creatorName&&title&&summary&&value){
      axios.post(APIUrl.uploadPreBlog, {
        CreatorName:creatorName,
        // CreatorKey,
        ContentTag:referenceTag,
        ImageUrl:imageUrl,
        BlogTitle:title,
        BlogSummary:summary,
        BloagDesciption:value,
      }).then(
        (res)=>{
          console.log(res.data);
          alert("Form Submitted")
          navigate("/")
        }
      );
    }else{
      alert("Fill creatorName , title , summary , detailedBlog")
    }
  }
  return (
    <div className="page-blog-upload">
      <p>Genral Details :- </p>
      <hr />
      <div>
        <input
          className="blog-upload-input"
          type="text"
          placeholder="Creator Name"
          value={creatorName}
          onChange={(e) => {
            setcreatorName(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="blog-upload-input"
          type="text"
          placeholder="Reference Tag"
          value={referenceTag}
          onChange={(e) => {
            setreferenceTag(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="blog-upload-input"
          type="text"
          placeholder="Reference image url"
          value={imageUrl}
          onChange={(e) => {
            setimageUrl(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="blog-upload-input"
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          className="blog-upload-input"
          type="text"
          placeholder="Short Summary"
          value={summary}
          onChange={(e) => {
            setsummary(e.currentTarget.value);
          }}
        />
      </div>
      <br />
      <p>Detailed Blog</p>
      <hr />
      <div
        className="blog-upload-cont"
        style={{ width: "100%", height: "300px" }}
      >
        <div
          ref={quillRef}
          value={value}
          onChange={(e) => {
            setsummary(e.currentTarget.value);
          }}
        />
      </div>
      <br />
      <br />
      {/* <hr /> */}
      <br />
      <button className="mp-btn" onClick={handlePost}>
        Submit
      </button>
    </div>
  );
}

export default BlogUpload;
