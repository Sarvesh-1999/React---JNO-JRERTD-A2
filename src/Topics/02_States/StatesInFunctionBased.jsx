import { useState } from "react";

function StatesInFunctionBased() {
  let [count, setCount] = useState(0); // returns , [undefined, ƒ]

  function incre() {
    setCount((prev) => prev + 1);
  }
  function decre() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Learn States In Function Based</h1>
      <h2>Counter : {count}</h2>
      <button onClick={incre}>incremnet</button>
      <button onClick={decre}>decremnet</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
export default StatesInFunctionBased;
