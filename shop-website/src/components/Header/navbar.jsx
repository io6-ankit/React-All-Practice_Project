import { Box, Typography } from "@mui/material";
import React from "react";
import "../Header/Navbar.css";
import SearchIcons from "../../assets/icons/search-icons.jpg";
const Navbar = () => {
  return (
    <>
      <Box className="Main">
        <Box className="logo-name">
          <Typography variant="h2">Shopsy</Typography>
        </Box>
        <Box className="input">
          <Box>
            <SearchIcons />
          </Box>
          <input placeholder="Search for product,Brands and more"></input>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
