import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Second from "./second";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
      {/* <Home />
      <Second /> */}
    </>
  );
}

export default App;
