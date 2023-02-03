import React from "react";
import { Link } from "react-router-dom";
import "./styleUser/page-creator.css"
// import UnderConstruction from "./UnderConstruction";
function Creator() {
  return (
    <div className="page-creator">
      <div >Creator</div>
      <ul className="">
        <p>Choose the best one for you :-</p>
        <li>
          <Link to="/upload/blog">Blogs </Link>
        </li>
        <li>
          <Link to="/upload/image">Images </Link>
        </li>
        <li>
          <Link to="/upload/video">Video </Link>
        </li>
        <li>
          <Link to="/upload/news">News </Link>
        </li>
        <li>
          <Link to="/upload/event">Event </Link>
        </li>
        <li>
          <Link to="/upload/status">Status </Link>
        </li>
      </ul>
      {/* <UnderConstruction /> */}
    </div>
  );
}

export default Creator;
