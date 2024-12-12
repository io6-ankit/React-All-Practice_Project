import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact";
import Home from "./component/Home";
import Project from "./component/project";
// import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home name="Ankit" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
