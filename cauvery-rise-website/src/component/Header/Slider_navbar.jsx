import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo/cauvery_logo.png";
import "../Styleing/Slider-navbar.css";
const Slider_Navbar = () => {
  return (
    <>
      <Box className="Slider-Navbar-parent">
        <Box className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{ height: 80, width: 80, marginLeft: 150 }}
          />
        </Box>
        <Box className="section">
          <a href="a">HOME</a>
          <a href="a">ABOUT US</a>
          <a href="a">PRODUCT</a>
          <a href="a">TESTIMONIALS</a>
          <a href="a">CONTACT</a>
        </Box>
      </Box>
    </>
  );
};
export default Slider_Navbar;
