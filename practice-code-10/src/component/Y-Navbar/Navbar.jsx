import { Avatar, Box } from "@mui/material";
import React from "react";
import "../Y-Navbar/navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Logo from "../../assets/logo/youtube.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Navbar = () => {
  return (
    <>
      <Box className="main">
        <Box className="logo-section">
          <DensityMediumIcon />
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "80px", width: "140px" }}
          />
        </Box>
        <Box className="input-section">
          <input
            type="text "
            placeholder="Search"
            style={{
              height: "36px",
              width: "90%",
              outline: "none",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          />
          <SearchIcon
            style={{
              border: "1px solid black",
              height: "40px",
              width: "40px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          />
        </Box>
        <Box className="icon-section">
          <VideoCallIcon style={{ height: "40px", width: "50px" }} />
          <NotificationsNoneIcon style={{ height: "40px", width: "50px" }} />
          <Avatar></Avatar>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
