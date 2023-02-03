import React from "react";
// import { Route, Routes } from "react-router-dom";
// import BlogUpload from "./BlogUpload";
import { Route, Routes } from "react-router-dom";
import BlogUpload from "./BlogUpload";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import NewsUpload from "./NewsUpload";
import UploadHome from "./UploadHome";
function Upload() {
  return (
    <div>
      <Routes>
        <Route path="" element={<UploadHome></UploadHome>}></Route>
        <Route path="blog" element={<BlogUpload></BlogUpload>}></Route>
        <Route path="image" element={<ImageUpload></ImageUpload>}></Route>
        <Route path="video" element={<VideoUpload></VideoUpload>}></Route>
        <Route path="news" element={<NewsUpload></NewsUpload>}></Route>
      </Routes>
    </div>
  );
}

export default Upload;
