import React, { useReducer } from "react";
import { initialState, reducerFunc } from "./reducerFunc";

const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState); //[ud, f]

  return (
    <div>
      <h1 className="text-center text-4xl">Learn useReducer {state}</h1>

      <button className="bg-gray-300 m-3" onClick={() => dispatch("incre")}>
        increment
      </button>

      <button className="bg-gray-300 m-3" onClick={() => dispatch("decre")}>
        decrement
      </button>

      <button className="bg-gray-300 m-3" onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
};

export default Reducer;
