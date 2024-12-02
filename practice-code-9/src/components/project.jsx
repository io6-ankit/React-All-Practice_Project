import { Box, Typography } from "@mui/material";
import React from "react";
import "./project.css";
import ProjectImage from "./assets/image/projectImage.png";
import ProjectName from "./ProjectName";
const Project = () => {
  return (
    <>
      <Box className="project-main-section">
        <Box className="project-image-section">
          <img src={ProjectImage} alt="projevt-image" />
        </Box>
        <Box>
          <Box className="project-heading-section">
            <Typography variant="h2">Projects</Typography>
          </Box>
          <Box className="project-paragraph-section">
            <Typography variant="p">
              My projects makes use of vast variety of latest technology tools.
            </Typography>
          </Box>
        </Box>
      </Box>
      <ProjectName />
    </>
  );
};
export default Project;
