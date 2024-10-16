import logo from "./logo.svg";
import "./App.css";
import { useState, backgroundColor } from "react";

function App() {
  const [myname, setName] = useState("my name is Ankit Maurya");
  const handleChangeName = () => {
    let name = myname;

    if (name === "my name is Ankit Maurya") {
      setName("I am a software engineer");
    } else {
      setName("my name is Ankit Maurya");
    }
  };
  return (
    <>
      <div>{myname}</div>
      <button onClick={handleChangeName}>click</button>
    </>
  );
}

export default App;
