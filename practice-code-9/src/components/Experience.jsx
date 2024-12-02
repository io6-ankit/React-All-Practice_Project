import React from "react";
import Box from "@mui/material/Box";
import "./experience.css";
import { Typography } from "@mui/material";
import ExperienceImage from "./assets/image/experience-image.png";
const Experience = () => {
  return (
    <Box className="Experience-main-section">
      <Box className="Experience-main-image-section">
        <img
          className="Experience-image-section"
          src={ExperienceImage}
          alt="experience-image"
        />
      </Box>
      <Box className="Experience-parent-section">
        <Box className="Experience-main-heading-section">
          <Typography variant="h3">Experience</Typography>
        </Box>
        <Box className="Experience-heading-section">
          <Typography variant="h4">Fresher</Typography>
        </Box>
        <Box className="Experience-paragraph-section">
          <Typography variant="p">
            I am a fresher.But I have basic knowledge of HTML, CSS, ReactJS,
            JavaScript, Bootstrap, Material UI, Parcel, Git, Github, Netlify. I
            have completed many projects using HTML, CSS, React JS, JavaScript,
            Material UI, Parcel, Bootstrap.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Experience;
