import React, { useState } from "react";
import "./light.css";
import { Box } from "@mui/material";
const Light = () => {
  const [color1, setColor1] = useState("");

  const handleClickOn1 = () => {
    setColor1("red");
  };
  const handleClickOf1 = () => {
    setColor1("");
  };
  const [color2, setColor2] = useState("");

  const handleClickOn2 = () => {
    setColor2("green");
  };
  const handleClickOf2 = () => {
    setColor2("");
  };
  const [color3, setColor3] = useState("");
  const handleClickOn3 = () => {
    setColor3("yellow");
  };
  const handleClickOf3 = () => {
    setColor3("");
  };
  const [color4, setColor4] = useState("");
  const handleClickOn4 = () => {
    setColor4("blue");
  };
  const handleClickOf4 = () => {
    setColor4("");
  };
  const [color, setColor] = useState("pink");

  return (
    <>
      <Box className="main">
        <Box>
          <Box className="light-point">
            <Box className="pin"></Box>
            <Box className="light-conection">
              <Box className="light-conection-2"></Box>
            </Box>
          </Box>
          <Box className="glass-point" style={{ background: color1 }}></Box>
          <button onClick={handleClickOn1}>Light On</button>
          <button onClick={handleClickOf1}>Light of</button>
        </Box>
        <Box>
          <Box className="light-point">
            <Box className="pin"></Box>
            <Box className="light-conection">
              <Box className="light-conection-2"></Box>
            </Box>
          </Box>
          <Box className="glass-point" style={{ background: color2 }}></Box>
          <button onClick={handleClickOn2}>Light On</button>
          <button onClick={handleClickOf2}>Light of</button>
        </Box>
        <Box>
          <Box className="light-point">
            <Box className="pin"></Box>
            <Box className="light-conection">
              <Box className="light-conection-2"></Box>
            </Box>
          </Box>
          <Box className="glass-point" style={{ background: color3 }}></Box>
          <button onClick={handleClickOn3}>Light On</button>
          <button onClick={handleClickOf3}>Light of</button>
        </Box>
        <Box>
          <Box className="light-point">
            <Box className="pin"></Box>
            <Box className="light-conection">
              <Box className="light-conection-2"></Box>
            </Box>
          </Box>
          <Box className="glass-point" style={{ background: color4 }}></Box>
          <button onClick={handleClickOn4}>Light On</button>
          <button onClick={handleClickOf4}>Light of</button>
        </Box>
      </Box>
    </>
  );
};
export default Light;
