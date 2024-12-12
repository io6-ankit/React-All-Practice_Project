import React from "react";
import ChildC from "./ChildC";

const ChildB = ({ name }) => {
  return (
    <>
      <div>ChildB</div>;
      <ChildC name={name} />
    </>
  );
};
export default ChildB;
