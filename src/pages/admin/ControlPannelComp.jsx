import React from 'react'
import { Link } from 'react-router-dom'

function ControlPannelComp() {
  return (
    <div><div className="page-contorlPannel">
    <h1>Checkout :-</h1>
    <ul> 
      <Link to="blogs">
        <li>Blog</li>
      </Link>
      <Link to="videos">
        <li>Video</li>
      </Link>
      <Link to="images">
        <li>Image</li>
      </Link>
      <Link to="news">
        <li>News</li>
      </Link>
      <Link to="event">
        <li>Event</li>
      </Link>
      <Link to="status">
        <li>Status</li>
      </Link>
    </ul>
  </div></div>
  )
}

export default ControlPannelComp