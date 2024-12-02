import React from "react";
import { Box } from "@mui/material";
import "./Education.css";
import QualificationImage from "./assets/image/qualification-image.png";
import Qualification from "./Qualification";
const Education = () => {
  return (
    <>
      <Box className="experience-main-section">
        <Box className="experience-image-section">
          <img
            className="qualification-image"
            src={QualificationImage}
            alt="qualification-image"
          />
        </Box>
        <Box className="experience-heading-section">
          <Box>
            <Box className="main-heading-eduvation">Education</Box>

            <Box className="education-heading">
              Basic Qualification and Certifcations
            </Box>
          </Box>
        </Box>
      </Box>
      <Qualification />
    </>
  );
};
export default Education;
