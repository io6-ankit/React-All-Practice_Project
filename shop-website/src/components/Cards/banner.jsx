import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        background: "linear-gradient(135deg, #4b1ead, #7a22c6)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ zIndex: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Step Out in Trendy Flats
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFD700" }}>
          From ₹118
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 3 }}>
          High in Fashion & Comfort
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "black",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Right Side Product Image */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <img
          src="https://via.placeholder.com/200"
          alt="Trendy Flats"
          style={{ height: "200px", borderRadius: "10px" }}
        />
      </Box>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 80%)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Banner;
