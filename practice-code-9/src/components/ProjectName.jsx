import { Box, Typography } from "@mui/material";
import React from "react";
import "./projectName.css";
const ProjectName = () => {
  return (
    <>
      <Box className="projectName-main-section">
        <a href="http://calculator-create-by-ankitmaurya.netlify.app/">
          <Box className="First-project">
            <Box className="first-project-heading-section">
              <Typography variant="h4">Calculator</Typography>
            </Box>
            <Box className="first-project-paragraph-section">
              <Typography variant="p">
                HTML,css and JavaScript language have been used to create the
                calculator.
              </Typography>
            </Box>
          </Box>
        </a>
        <a href="https://todoappcreatebyankitmaurya.netlify.app/">
          <Box className="second-project">
            <Box className="second-project-heading-section">
              <Typography variant="h4">Todo App</Typography>
            </Box>
            <Box className="first-project-paragraph-section">
              <Typography variant="p">
                React js,css, material ui,and JavaScript language have been used
                to create the Todo App.
              </Typography>
            </Box>
          </Box>
        </a>
        <a href="http://digital-watch-createbyankitmaurya.netlify.app/">
          <Box className="third-project">
            <Box className="third-project-heading-section">
              <Typography variant="h4">Digital Watch</Typography>
            </Box>
            <Box className="first-project-paragraph-section">
              <Typography variant="p">
                React js ,css , material ui , and JavaScript language have been
                used to create the Digital Watch.
              </Typography>
            </Box>
          </Box>
        </a>
      </Box>
    </>
  );
};
export default ProjectName;
