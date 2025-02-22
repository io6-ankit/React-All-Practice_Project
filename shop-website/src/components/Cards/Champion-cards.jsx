import { ExpandOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import "../Cards/cards.css";

const OfferCard = (props) => {
  return (
    <Box className="cards">
      <img src={props.img} alt="image" className="image" />
    </Box>
  );
};
export default OfferCard;
