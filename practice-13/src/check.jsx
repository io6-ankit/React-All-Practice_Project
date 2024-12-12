import { Box } from "@mui/material";
import React, { useState } from "react";
const Check = () => {
  const [color, setColor] = useState("red");
  return (
    <>
      <Box Style={(background = color)}></Box>
    </>
  );
};
export default Check;
