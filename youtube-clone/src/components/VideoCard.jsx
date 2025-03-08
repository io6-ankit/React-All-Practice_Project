import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "./styling-all/VideoCards.css";

import ReactPlayer from "react-player";
const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  Video,
}) => {
  return (
    <>
      <div className="videocard">
        {/* <img className="videoCard-thumbnail" src={image} alt="Image" /> */}
        <ReactPlayer url={Video} controls width="250px" height="140px" />

        <div className="video_info">
          <Avatar className="video_avatar" alt={channel} src={channelImage} />
          <div className="video_text">
            <h3 className="video_title_heading">{title}</h3>
            <p className="video_channel_heading">{channel}</p>
            <p className="video_views_heading">
              {views} . {timestamp}
            </p>
          </div>
        </div>
      </div>
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls
        width="600px"
        height="340px"
      /> */}
    </>
  );
};
export default VideoCard;
