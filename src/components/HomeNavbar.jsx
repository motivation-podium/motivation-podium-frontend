import React from "react";
import { FcHome } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import "./styleComponent/homenavbar.css";
function HomeNavbar() {
  const navigateUrl = useNavigate();
  function handleLogout() {
    let logoutHandler = window.confirm("Do you wnat to logout ?");

    if (logoutHandler) {
      console.log("We are logging out you");
      localStorage.clear();
      navigateUrl("/", { replace: true });
    }
  }
  return (
    <div className="comp-HomeNavbar">
      <div className="homeNavTop">
        <Link to="">
          <div className="homeNavItem">
            <div>
              <FcHome className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Home</div>
          </div>
        </Link>
        <Link to="blogs">
          <div className="homeNavItem">
            <div>
              <FcTemplate className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Blogs</div>
          </div>
        </Link>
        <Link to="videos">
          <div className="homeNavItem">
            <div>
              <FcStart className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Videos</div>
          </div>
        </Link>
        <Link to="images">
          <div className="homeNavItem">
            <div>
              <FcGallery className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Images</div>
          </div>
        </Link>
        <Link to="news">
          <div className="homeNavItem">
            <div>
              <FcNews className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">News</div>
          </div>
        </Link>
        <Link to="profile">
          <div className="homeNavItem">
            <div>
              <FcBusinessman className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Profile</div>
          </div>
        </Link>
        <Link to="notification">
          <div className="homeNavItem">
            <div>
              <FcFeedback className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Notification</div>
          </div>
        </Link>
        <Link to="shop">
          <div className="homeNavItem">
            <div>
              <FcPaid className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Shop</div>
          </div>
        </Link>
        <Link to="setting">
          <div className="homeNavItem">
            <div>
              <FcSettings className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Setting</div>
          </div>
        </Link>
        <Link to="language">
          <div className="homeNavItem">
            <div>
              <FcGlobe className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Language</div>
          </div>
        </Link>
        {/* <Link> */}
        <div className="homeNavItem" onClick={handleLogout}>
          <div>
            <FcMediumPriority className="homeNavIcon" />
          </div>
          <div className="homeNavIconDetail">Logout</div>
        </div>
        {/* </Link> */}
      </div>
      <div className="homeNavBottom">
        <Link to="bookmark">
          <div className="homeNavItem">
            <div>
              <FcBookmark className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Bookmark</div>
          </div>
        </Link>
        <Link to="premium">
          <div className="homeNavItem">
            <div>
              <FcUnlock className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Premium</div>
          </div>
        </Link>
        <Link to="creator">
          <div className="homeNavItem">
            <div>
              <FcPlus className="homeNavIcon" />
            </div>
            <div className="homeNavIconDetail">Creator</div>
          </div>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default HomeNavbar;
