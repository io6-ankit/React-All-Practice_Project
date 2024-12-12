import react from "react";
import "./navbar.css";
import Home from "./Home";
import Contact from "./contact";
import Project from "./project";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const HandleClickedHomePage = () => {
    navigate("/");
  };
  const HandleClickedContactPage = () => {
    navigate("/contact");
  };
  const HandleClickedProjectPage = () => {
    navigate("/project");
  };
  return (
    <>
      <div>Navbar</div>
      <div className="Navbar">
        <div onClick={() => HandleClickedHomePage()}> Home</div>
        <div onClick={() => HandleClickedContactPage()}> Contact</div>
        <div onClick={() => HandleClickedProjectPage()}> Project</div>
      </div>
    </>
  );
};
export default Navbar;
