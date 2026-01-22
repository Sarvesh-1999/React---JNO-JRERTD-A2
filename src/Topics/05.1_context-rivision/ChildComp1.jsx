import React from "react";
import ChildComp2 from "./ChildComp2";

const ChildComp1 = () => {
  return (
    <div>
      ChildComp1
      <ChildComp2 />
    </div>
  );
};

export default ChildComp1;
