import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState("hello may name is Ankit maurya");
  const [nums, setNums] = useState(" Ankit maurya");
  const HandleClicked = () => {
    setNum(if(num));
  };
  useEffect(() => {
    alert("clicked the value");
  }, [num]);
  return (
    <>
      <button onClick={HandleClicked}>clicked</button>
      <div>{num}</div>
    </>
  );
}

export default App;
