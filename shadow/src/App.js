// import logo from './logo.svg';
import { Box, Typography } from "@mui/material";
// import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import "./App.css";
import { useState } from "react";

function App() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [Hori, setHori] = useState(5);
  const [Veri, setVeri] = useState(5);
  const [Blur, setBlur] = useState(5);
  const [Color, setColor] = useState("black");
  const [CheckOn, setCheckOn] = useState(false);
  return (
    <Box className="App">
      <Box className="controls">
        <Box>
          <Typography variant="h4">Horizontal lenght</Typography>
          <input
            style={{ width: 200 }}
            type="range"
            min="-200"
            max="200"
            value={Hori}
            onChange={(e) => setHori(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="h4">Vertical lenght</Typography>
          <input
            style={{ width: 200 }}
            type="range"
            min="-200"
            max="200"
            value={Veri}
            onChange={(e) => setVeri(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="h4">Blur</Typography>
          <input
            style={{ width: 200 }}
            type="range"
            min="0"
            max="200"
            value={Blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </Box>

        <Box>
          <Typography variant="h4">Color</Typography>
          <input
            style={{ width: 50, height: 40 }}
            type="color"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Box>
        <Box>
          <label>Outline</label>
          <Switch
            {...label}
            defaultChecked
            checked={CheckOn}
            onChange={(e) => setCheckOn(!CheckOn)}
          />
          <label>Inset</label>
        </Box>
      </Box>
      <Box className="output">
        <Box
          className="box"
          style={{
            boxShadow: `${
              CheckOn ? "inset" : ""
            }   ${Hori}px ${Veri}px ${Blur}px ${Color}`,
          }}
        >
          <Typography variant="p" className="paragraph">
            boxShadow:{Hori}px {Veri}px {Blur}px {Color}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
