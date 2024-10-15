import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [myName, setMyName] = useState("My name is Ankit mauarya");
  const HandleChangeName = () => {
    let val = myName;
    if (val === "My name is ankit Maurya") {
      setMyName("I am a software engineer");
    } else {
      setMyName("My name is ankit Maurya");
    }
  };
  return (
    <>
      <div>{myName}</div>
      <button onClick={HandleChangeName}>clicked</button>
    </>
  );
}

export default App;
