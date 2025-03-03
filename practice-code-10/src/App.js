import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Y-Navbar/Navbar";
import Sidebar from "./component/Side-bar/side-bar";
import Recommended from "./component/RecommendedVideo/Recommended";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Box className="Video-section">
        <Sidebar />
        <Recommended />
      </Box>
    </>
  );
}

export default App;
