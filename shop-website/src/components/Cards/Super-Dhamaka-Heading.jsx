import { Box } from "@mui/material";
import React from "react";
import SuperHeadingImage from "../../assets/image/super-dhamaka-heading-image.webp";
import { Margin } from "@mui/icons-material";
const SuperHeading = () => {
  return (
    <Box>
      <img
        src={SuperHeadingImage}
        alt="image"
        style={{ height: "150px", width: "100%" }}
      />
    </Box>
  );
};
export default SuperHeading;
