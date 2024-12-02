import React from "react";
import Box from "@mui/material/Box";
import "./Home.css";
import Image from "./assets/image/man.png";
import Github from "./assets/image/GitHub.png";
import Linkedle from "./assets/image/linkedle.png";
import { Link } from "react-router-dom";
import SelfIntroduction from "./Self-Intro";
const Home = () => {
  return (
    <>
      <Box className="container">
        <Box className="left-section">
          <h1 className="name-heading">Ankit Maurya</h1>
          <p className="tytle">
            I am a passionate frontend developer, who always thrives to work on
            end to end projects which develop sustainable and scalable social
            and technical systems to create impact.
          </p>
          <a href="https://github.com/io6-ankit">
            <img className="Github-image" src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-maurya-b7207727a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img className="Linkedle-image" src={Linkedle} alt="Linkedle" />
          </a>
        </Box>
        <Box className="right-section">
          <img className="image" src={Image} alt="man" />
          {/* <img src={Image} alt="man" /> */}
        </Box>
      </Box>
      <SelfIntroduction />
    </>
  );
};
export default Home;
