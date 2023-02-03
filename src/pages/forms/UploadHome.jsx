import React from "react";
import { Link } from "react-router-dom";

function UploadHome() {
  return (
    <div>
      <h2>We are happy to See You that You are willing to contribute us</h2>
      <ul>
        <p>Choose the best one for you :-</p>
        <li>
          <Link to="blog">Blogs </Link>
        </li>
        <li>
          <Link to="image">Images </Link>{" "}
        </li>
        <li>
          <Link to="video">Video </Link>{" "}
        </li>
        <li>
          <Link to="news">News </Link>{" "}
        </li>
        <li>
          <Link to="event">Event </Link>{" "}
        </li>
        <li>
          <Link to="status">Status </Link>{" "}
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default UploadHome;
