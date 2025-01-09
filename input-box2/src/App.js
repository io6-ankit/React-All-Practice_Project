import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmitInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const number = parseFloat(inputValue);

  //   if (number >= 0) {
  //     setErrormessage("Please enter a valid number.");
  //   } else if (number < 0) {
  //     setErrormessage("Please enter a positive value.");
  //   } else {
  // Perform your calculations here
  // ...
  // setErrormessage("");
  // }
  // if (number < 0) {
  //   setErrormessage("Please enter a positive number ");
  // } else {
  //   setErrormessage("");
  // }
  // };
  return (
    <div className="App">
      <form>
        <label htmlFor="numberInput"></label>
        <input
          type="text"
          id="numberInput"
          value={inputValue}
          onChange={handleSubmitInputValue}
        />
        <button type="clicked">Click</button>
      </form>
      <form>{inputValue > 0 ? "" : "Enter the positive value"}</form>
    </div>
  );
}

export default App;
