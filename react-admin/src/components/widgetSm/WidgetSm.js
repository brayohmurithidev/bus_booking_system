import { Visibility } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./widgetSm.css";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTittle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://th.bing.com/th/id/R.68cff63034c743d1bd3be8cb44cffad9?rik=uvCla7MPR4eeog&pid=ImgRaw&r=0" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Murithi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <Avatar src="https://th.bing.com/th/id/R.68cff63034c743d1bd3be8cb44cffad9?rik=uvCla7MPR4eeog&pid=ImgRaw&r=0" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Murithi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <Avatar src="https://th.bing.com/th/id/R.68cff63034c743d1bd3be8cb44cffad9?rik=uvCla7MPR4eeog&pid=ImgRaw&r=0" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Murithi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <Avatar src="https://th.bing.com/th/id/R.68cff63034c743d1bd3be8cb44cffad9?rik=uvCla7MPR4eeog&pid=ImgRaw&r=0" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Murithi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
          <Avatar src="https://th.bing.com/th/id/R.68cff63034c743d1bd3be8cb44cffad9?rik=uvCla7MPR4eeog&pid=ImgRaw&r=0" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Murithi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
