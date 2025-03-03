import React from "react";
import { Box } from "@mui/material";
import "./styling-all/Side-bar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideBarRow from "./SideBarRow";
const SideBar = () => {
  return (
    <>
      <Box className="side-bar">
        <SideBarRow Icon={HomeIcon} title="Home" />
        <SideBarRow Icon={SubscriptionsIcon} title="Subscribe" />
        <SideBarRow Icon={WhatshotIcon} title="Trending" />
        <hr />
        <SideBarRow Icon={VideoLibraryIcon} title="Library" />
        <SideBarRow Icon={HistoryIcon} title="History" />
        <SideBarRow Icon={OndemandVideoIcon} title="Your Videos" />
        <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SideBarRow Icon={ThumbUpIcon} title="Liked Video" />
        <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
        <hr />
        {/* <SideBarRow title="History" /> */}
      </Box>
    </>
  );
};
export default SideBar;
