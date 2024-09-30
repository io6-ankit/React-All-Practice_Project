import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Second from "./second";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Route path="/" Component={Home} />
        <Route path="second" Component={Second} />
      </Router>
      {/* <Home />
      <Second /> */}
    </>
  );
}

export default App;
