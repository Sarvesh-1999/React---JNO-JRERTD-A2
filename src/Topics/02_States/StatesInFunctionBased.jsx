import { useState } from "react";

const StatesInFunctionBased = () => {
  let [state, setState] = useState("Hello"); // ["Hello" , f]

  function btnHandle() {
    setState("Byee");
  }

  return (
    <div>
      <h1>Learn States in Function Based Component</h1>
      <h2>{state}</h2>
      <button onClick={btnHandle}>update state</button>
    </div>
  );
};
export default StatesInFunctionBased;
