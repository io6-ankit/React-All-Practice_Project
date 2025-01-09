import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [nextNumber, setNextNumber] = useState([]);
  const handleSubmitNumber = (event) => {
    setNumber(event.target.value);
    if (number % 2 == 0) {
      setNumber([number + 2, number + 4, number + 6]);
    } else {
      setNumber("enter the number");
    }
  };

  // const findnextbutton = () => {
  //   const num = parseInt(number);
  //   console.log(num);
  //   if (num % 2 == 0) {
  //     setNextNumber([number + 2, number + 4, number + 6]);
  //   } else {
  //     setNextNumber("enter the correct number");
  //   }
  // };

  return (
    <div className="App">
      <input type="text" value={number} onChange={handleSubmitNumber}></input>
      <button>Click</button>
      <form>{number}</form>
    </div>
  );
}

export default App;
