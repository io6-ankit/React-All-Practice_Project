import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const App = () => {
  const { id } = useParams(); // URL से id प्राप्त करें
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(id); // URL param से state अपडेट करें
  }, [id]);

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default App;
