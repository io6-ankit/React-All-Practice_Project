import { Box, Typography } from "@mui/material";
import React from "react";
import Whatsapp from "../../assets/Icons/whatsapp-image.jpg";
import Email from "../../assets/Icons/email.jpg";
import Facebook from "../../assets/Icons/facebook.jpg";
import Twitter from "../../assets/Icons/twitter.png";
import Instagram from "../../assets/Icons/instagram.jpg";
import "../Styleing/Social-Media-Style.css";
const Social_Media = () => {
  return (
    <>
      <Box className="Social-Media-Parent">
        <Box className="contact">
          <img src={Whatsapp} alt="whatsapp" />
          <Typography variant="p" style={{ marginLeft: 10 }}>
            Whatsapp:-+919944697777
          </Typography>
          <img
            src={Email}
            alt="Email"
            style={{ height: 20, width: 20, marginLeft: 15 }}
          />
          <Typography variant="p" style={{ marginLeft: 10 }}>
            info@cauveryrise.com
          </Typography>
        </Box>
        <Box className="social-media">
          <img
            src={Facebook}
            alt="Facebook"
            style={{ height: 35, width: 35, borderRadius: 50 }}
          />
          <img
            src={Twitter}
            alt="Twitter"
            style={{ height: 35, width: 35, borderRadius: 50, marginLeft: 15 }}
          />
          <img
            src={Instagram}
            alt="instagram"
            style={{ height: 40, width: 40, borderRadius: 50, marginLeft: 15 }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Social_Media;
