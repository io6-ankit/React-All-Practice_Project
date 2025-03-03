import { Box, Typography } from "@mui/material";
import "./styling-all/SidebarRow.css";
import React from "react";
const SideBarRow = ({ selected, Icon, title }) => {
  return (
    <>
      <Box className="SideBarRow">
        <Icon className={`SideBarIcon ${selected && "selected"}`} />
        <Typography variant="h6" className="title">
          {title}
        </Typography>
      </Box>
    </>
  );
};
export default SideBarRow;
