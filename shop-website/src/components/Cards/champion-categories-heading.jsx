import { Box } from "@mui/material";
import React from "react";
import FreeDelivery from "../../assets/image/image-free-delivery.webp";
import ChampionImage from "../../assets/image/champion-image.webp";
const Champion = () => {
  return (
    <Box>
      <img src={FreeDelivery} style={{ height: "150px", width: "100%" }} />
      <img
        src={ChampionImage}
        alt="image"
        style={{ height: "150px", width: "100%" }}
      />
    </Box>
  );
};
export default Champion;
