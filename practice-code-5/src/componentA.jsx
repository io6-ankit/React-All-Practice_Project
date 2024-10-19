import React from "react";
import ComponentB from "./componentB";
const ComponentA = ({ name }) => {
  return <ComponentB name={name} />;
};
export default ComponentA;
