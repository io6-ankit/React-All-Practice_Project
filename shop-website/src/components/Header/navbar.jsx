import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import {
  Search,
  AccountCircle,
  ShoppingCart,
  Storefront,
  MoreVert,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: 1, padding: "5px 20px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography variant="h5" sx={{ color: "#673ab7", fontWeight: "bold" }}>
          shopsy
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            padding: "5px 15px",
            width: "40%",
          }}
        >
          <Search sx={{ color: "gray" }} />
          <InputBase
            placeholder="Search for Products, Brands and More"
            sx={{ marginLeft: "10px", flex: 1 }}
          />
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <AccountCircle sx={{ color: "black" }} />
            <Typography sx={{ marginLeft: "5px", color: "black" }}>
              Login
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <ShoppingCart sx={{ color: "black" }} />
            <Typography sx={{ marginLeft: "5px", color: "black" }}>
              Cart
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Storefront sx={{ color: "black" }} />
            <Typography sx={{ marginLeft: "5px", color: "black" }}>
              Become a Seller
            </Typography>
          </Box>

          <IconButton>
            <MoreVert sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
