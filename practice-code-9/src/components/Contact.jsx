import React from "react";
import { Box, Typography } from "@mui/material";
// import ExperienceImage from "./assets/image/experience-image.png";
import Man2 from "./assets/image/man-2.png";
import Github from "./assets/image/GitHub.png";
import Linkedln from "./assets/image/linkedle.png";
import "./contact.css";
// import { Man2 } from "@mui/icons-material";
const Contact = () => {
  return (
    <>
      <Box className="Contact-main-section">
        <Box className="Contact-main-image-section">
          <img
            className="Contact-image-section"
            src={Man2}
            alt="experience-image"
          />
        </Box>
        <Box className="contact-main-heading-section">
          <Box className="contact-heading-section">
            <Typography variant="h2">Contact Me</Typography>
          </Box>
          <Box className="contact-paragraph-section">
            <Typography variant="h5">
              I am available on some social media. You can message me, I will
              reply within 1 days. I can help you with JS, React, Html, Css and
              Opensource Development.
            </Typography>
            <a href="https://github.com/io6-ankit">
              <img className="githubImageSection" src={Github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-maurya-b7207727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img
                className="linkedlnImageSection"
                src={Linkedln}
                alt="Linkedle"
              />
            </a>
            <Box>
              <button className="resume-button">Download My Resume</button>
            </Box>
            <Box>
              <Box className="adress-heading-section">
                <Typography variant="h3">Adress</Typography>
              </Box>
            </Box>
            <Box className="adress-paragraph-section">
              122, Arthar Sanjayganj Bazar Ayodhya Uttar Pradesh
            </Box>
          </Box>
          <Box className="heading-mobile-number-section">
            <Typography variant="h3">Mobile Number</Typography>
          </Box>
          <Box className="number-section">+91-9935351589</Box>
          <Box className="maps">
            <a href="https://maps.app.goo.gl/ZaiEtvdceZUzwiFT9">
              <button className="visit-google-map-button">
                Visit on Google Maps
              </button>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Contact;
