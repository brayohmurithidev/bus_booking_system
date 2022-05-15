import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material/";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">React Admin</span>
        </div>
        <div className="topRight">
          <Stack direction="row" spacing={2}>
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <Avatar
              alt="Remy Sharp"
              src="https://th.bing.com/th/id/OIP.dLKDCF7xkgEebmdzmeo6xQHaHa?pid=ImgDet&rs=1"
              sx={{ width: 30, height: 30 }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
