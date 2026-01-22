import { useContext } from "react";
import { contextObject } from "./MyContext";
const ChildComp2 = () => {
  let val = useContext(contextObject);

  console.log(val);

  return <div>ChildComp2 {val}</div>;
};

export default ChildComp2;
