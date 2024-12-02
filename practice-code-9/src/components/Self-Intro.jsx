import { Box } from "@mui/material";
import React from "react";
import "./self-Intro.css";
import Image from "./assets/image/image.png";
import Bootstrap from "./assets/image/Bootstrap.png";
import CSS3 from "./assets/image/CSS3.png";
import Html5 from "./assets/image/html5.png";
import MaterialUi from "./assets/image/Material ui.png";
import NPM from "./assets/image/NPM.png";
import Javascript from "./assets/image/Javascript.png";
import ReactJs from "./assets/image/React js.png";
import Parcel from "./assets/image/parcel.png";
const SelfIntroduction = () => {
  return (
    <>
      <Box className="main-section">
        <Box className="heading">What I Do?</Box>
        <Box className="title">
          <Box className="image-main-section">
            <img className="image" src={Image} alt="image" />
          </Box>

          <Box className="heading-main-section">
            <Box className="heading-title">Frontend Development</Box>
            <Box className="Skills-Link-section">
              <img className="html5" src={Html5} alt="Html5" />

              <img className="css3" src={CSS3} alt="css3" />

              <img className="javascript" src={Javascript} alt="javascript" />
              <img className="bootstrap" src={Bootstrap} alt="Bootstrap" />
              <img className="materialui" src={MaterialUi} alt="materialui" />
              <img className="npm" src={NPM} alt="npm" />
              <img className="reactjs" src={ReactJs} alt="reactjs" />
              {/* <img className="parcel" src={Parcel} alt="parcel" /> */}
            </Box>
            <Box className="explain-section">
              <ul className="explain">
                <li>
                  {" "}
                  ⚡Building responsive website front end using React-Redux
                </li>
                <li>
                  {" "}
                  ⚡Developing web applications using React Js, Javascript,
                  Html5 and Css3.
                </li>
                <li> ⚡Creating application.</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SelfIntroduction;
