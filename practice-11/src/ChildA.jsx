import React from "react";
import ChildB from "./Childb";
const ChildA = ({ name }) => {
  return (
    <>
      <div>ChildA</div>;
      <ChildB name={name} />
    </>
  );
};
export default ChildA;
