import { Avatar, Box } from "@mui/material";
import React from "react";
import "./styling-all/header.css";
import Youtube from "../assets/logo/youtube.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Ankit from "../assets/image/Ankit.jpg";
const Header = () => {
  return (
    <>
      <Box className="header">
        <Box className="left-section">
          <MenuIcon style={{ height: 80, width: 40 }} />
          <img
            src={Youtube}
            alt="Youtube"
            style={{ height: 80, objectFit: "contain" }}
          />
        </Box>
        <Box className="input-Section">
          <input type="text" className="input" />
          <SearchIcon />
        </Box>
        <Box className="right-section">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar alt="Image" src={Ankit} />
        </Box>
      </Box>
    </>
  );
};
export default Header;
