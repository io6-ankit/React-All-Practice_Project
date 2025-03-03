import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "./styling-all/VideoCards.css";
const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <>
      <div className="videocard">
        <img className="videoCard-thumbnail" src={image} alt="Image" />
        <div className="video_info">
          <Avatar className="video_avatar" alt={channel} src={channelImage} />
          <div className="video_text">
            <h2 className="video_title_heading">{title}</h2>
            <p className="video_channel_heading">{channel}</p>
            <p className="video_views_heading">
              {views} . {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoCard;
