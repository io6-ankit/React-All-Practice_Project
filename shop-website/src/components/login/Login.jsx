import React, { useState } from "react";
import { Box, Typography, Button, TextField, Paper, Link } from "@mui/material";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/material.css";

const Login = () => {
  const [phone, setPhone] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        height: "50vh",
        width: "70%",
        border: "1px solid black",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          width: "35%",
          background: "linear-gradient(to bottom, #4a90e2, #8446d6)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Login
        </Typography>
        <Typography variant="body1" mt={2} textAlign="center">
          Get access to your Orders, Wishlist, and Recommendations
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          width: "35%",
        }}
      >
        <Paper elevation={3} sx={{ p: 5, width: "350px", textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold">
            Welcome!
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            Enter your mobile number to start shopping.
          </Typography>

          {/* Phone Input */}
          <input
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              height: "45px",
              fontSize: "16px",
              paddingLeft: "50px",
            }}
            containerStyle={{ marginTop: "20px" }}
          />

          <Typography variant="body2" color="textSecondary" mt={2}>
            By continuing, I agree to the{" "}
            <Link href="#" color="primary">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="#" color="primary">
              Privacy Policy
            </Link>
          </Typography>

          {/* Continue Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={phone.length < 10}
          >
            Continue
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
