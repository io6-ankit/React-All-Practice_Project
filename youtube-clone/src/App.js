import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Side-bar";
import RecommendedVideo from "./components/Recommended-videos";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box className="App-page">
        <SideBar />
        <RecommendedVideo />
      </Box>
    </div>
  );
}

export default App;
