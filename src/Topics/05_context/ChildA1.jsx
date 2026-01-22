import { useContext } from "react";
import ChildA2 from "./ChildA2";
import { myContextStore } from "./Context";

const ChildA1 = () => {
  let { data1, data2 } = useContext(myContextStore);

  return (
    <div>
      <h1>
        Child A1 Component {data1} {data2}
      </h1>

      <ChildA2 />
    </div>
  );
};

export default ChildA1;
