import React from "react";
import ComponentC from "./componentC";
const ComponentB = ({ name }) => {
  return <ComponentC name={name} />;
};
export default ComponentB;
