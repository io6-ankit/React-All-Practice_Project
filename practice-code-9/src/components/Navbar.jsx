import React from "react";
import Box from "@mui/material/Box";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickedHomePage = () => {
    navigate("/home");
  };
  const handleClickedEducationPage = () => {
    navigate("/education");
  };
  const handleClickedContactPage = () => {
    navigate("/contact");
  };
  const handleClickedProjectsPage = () => {
    navigate("/project");
  };
  const handleClickedExperiencePage = () => {
    navigate("/experience");
  };

  return (
    <>
      <Box className="container nav_bar">
        <Box className="left">-:-Ankit Maurya-:-</Box>
        <Box className="right">
          <ul className="main-list">
            <li onClick={() => handleClickedHomePage()} className="list">
              Home
            </li>

            <li onClick={() => handleClickedEducationPage()} className="list">
              Education
            </li>
            <li onClick={() => handleClickedExperiencePage()} className="list">
              Experience
            </li>
            <li onClick={() => handleClickedProjectsPage()} className="list">
              Projects
            </li>
            <li onClick={() => handleClickedContactPage()} className="list">
              Contact
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
