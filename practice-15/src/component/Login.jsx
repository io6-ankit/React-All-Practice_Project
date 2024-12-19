import { Box, Typography } from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./login.css";
const Loginpage = () => {
  const function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };
  return (
    <>
      <Box className="main">
        <Box className="login-title">
          <Typography variant="h4"> Login Page</Typography>
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 2 } }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" />
          </FormControl>{" "}
        </Box>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 2 } }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Email-ID</InputLabel>
            <Input id="component-simple" />
          </FormControl>{" "}
        </Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </>
  );
};
export default Loginpage;
