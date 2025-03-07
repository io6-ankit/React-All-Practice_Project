import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // API URL
      .then((response) => response.json()) // JSON में कन्वर्ट करें
      .then((data) => setData(data)) // डेटा को स्टेट में सेव करें
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
