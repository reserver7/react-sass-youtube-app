import React from "react";
import { MdVideoCall as VideoIcon } from "react-icons/md";
import { MdApps as Apps } from "react-icons/md";
import { MdNotifications as Notification } from "react-icons/md";

const RightNav = () => {
  return (
    <div className="buttons">
      <button
        className="icon-container"
        data-tooltip="Create"
        data-tooltip-conf="invert bottom"
      >
        <VideoIcon size={25} data-tip="Create" data-for="navbar" />
      </button>

      <button
        className="icon-container"
        data-tooltip="YouTube Apps"
        data-tooltip-conf="invert bottom"
      >
        <Apps size={25} data-tip="YouTube Apps" data-for="navbar" />
      </button>

      <button
        className="icon-container"
        data-tooltip="Notifications"
        data-tooltip-conf="invert bottom"
      >
        <Notification size={25} data-tip="" data-for="navbar" />
      </button>
    </div>
  );
};

export default RightNav;
