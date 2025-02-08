import React, { useState } from "react";
const Header = () => {
  const [name, setName] = useState("Ankit");
  const handleClick = () => {
    if (name == "Ankit") {
      setName("Ashutosh");
    } else {
      setName("Ankit");
    }
  };
  return (
    <>
      <div>{name}</div>
      <button onClick={handleClick}>click</button>
    </>
  );
};
export default Header;
