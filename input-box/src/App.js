import React, { useState } from "react";

function EvenNumberSeries() {
  const [inputNumber, setInputNumber] = useState("");
  const [nextEvenNumbers, setNextEvenNumbers] = useState([]);

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const findNextEvenNumbers = () => {
    const num = parseInt(inputNumber);

    if (isNaN(num) || num % 2 !== 0) {
      setNextEvenNumbers([]);
      return;
    }

    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(num + 2 * (i + 1));
    }

    setNextEvenNumbers(result);
  };

  return (
    <div>
      <input
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
        placeholder="Enter an even number"
      />
      <button onClick={findNextEvenNumbers}>Find Next Even Numbers</button>
      <ul>
        {nextEvenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default EvenNumberSeries;
