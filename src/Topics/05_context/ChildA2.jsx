import { useContext } from "react";
import { myContextStore } from "./Context";

const ChildA2 = () => {
  // ! STEP 3 : CONSUME A CONTEXT, RETURN VALUE OF createContext()
  let { setIsLoggedIn, isLoggedIn } = useContext(myContextStore);

  return (
    <div>
      <h1>Child A2 Component</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export default ChildA2;
