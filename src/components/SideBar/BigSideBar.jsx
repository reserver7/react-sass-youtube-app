import React from "react";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCompass as Compass } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

import { RiHistoryLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { RiThumbUpFill as Likes } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { RiFlagFill } from "react-icons/ri";

const BigSideBar = () => {
  return (
    <aside className="big_sidebar">
      <div className="big_sidebar_container">
        <div className="sidebar_section">
          <Link to="/">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Home"
              // data-tooltip-conf="delay bottom"
            >
              <AiFillHome size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Home</h4>
            </div>
          </Link>

          <Link to="/feed/explore">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Explore"
              // data-tooltip-conf="delay bottom"
            >
              <Compass size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Explore</h4>
            </div>
          </Link>

          <Link to="/feed/subscriptions">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Subscriptions"
              // data-tooltip-conf="delay bottom"
            >
              <MdSubscriptions size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Subscriptions</h4>
            </div>
          </Link>
        </div>
        <div className="sidebar_section">
          <Link to="/feed/library">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Library"
              // data-tooltip-conf="delay bottom"
            >
              <MdVideoLibrary size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Library</h4>
            </div>
          </Link>

          <Link to="/feed/history">
            <div
              className="sidebar_icon_container"
              // data-tooltip="History"
              // data-tooltip-conf="delay bottom"
            >
              <RiHistoryLine size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">History</h4>
            </div>
          </Link>

          <Link to="/watchLaterList">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Watch later"
              // data-tooltip-conf="delay bottom"
            >
              <MdWatchLater size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Watch later</h4>
            </div>
          </Link>

          <Link to="/likedVideosList">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Liked videos"
              // data-tooltip-conf="delay bottom"
            >
              <Likes size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Liked videos</h4>
            </div>
          </Link>
        </div>

        <div className="sidebar_section">
          <Link to="/settings">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Settings"
              // data-tooltip-conf="delay bottom"
            >
              <AiFillSetting size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Settings</h4>
            </div>
          </Link>
          <Link to="/report/history">
            <div
              className="sidebar_icon_container"
              // data-tooltip="Report history"
              // data-tooltip-conf="delay bottom"
            >
              <RiFlagFill size={23} className="sidebar_icon" />
              <h4 className="sidebar_text">Report history</h4>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BigSideBar;
