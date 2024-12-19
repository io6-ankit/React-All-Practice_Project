import logo from "./logo.svg";
import "./App.css";
import Homepage from "./component/Home";
import Contactpage from "./component/Contact";
import Aboutpage from "./component/About";
import Loginpage from "./component/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Homepage />} />
        <Route path="/cantact" element={<Contactpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
