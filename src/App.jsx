import StatesInFunctionBased from "./Topics/02_States/StatesInFunctionBased";
import StatesInClassBased from "./Topics/02_States/StatesInClassBased";
import DropDown from "./Topics/02_States/Dropdown";
import PropsParent from "./Topics/03_props/PropsParent";
import DrillingParent from "./Topics/04_PropsDrilling/DrillingParent";
import Parent1 from "./Topics/05_context/Parent1";
import Context from "./Topics/05_context/Context";
import MyContext from "./Topics/05.1_context-rivision/MyContext";
import ParentComp from "./Topics/05.1_context-rivision/ParentComp";
import UserLists from "./Topics/06_Lists/UserLists";
import LifeCycleInCBC from "./Topics/07_LifeCycle/LifeCycleInCBC";
import { useState } from "react";
import LifeCycleInFBC from "./Topics/07_LifeCycle/LifeCycleInFBC";
import Fetch1 from "./Topics/08_FetchApi/Fetch1";
import Fetch2 from "./Topics/08_FetchApi/Fetch2";
import Loader from "./Components/Loader";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      {/* <StatesInFunctionBased /> */}
      {/* <StatesInClassBased /> */}
      {/* <DropDown/> */}
      {/* <PropsParent/> */}
      {/* <DrillingParent /> */}
      {/* <Context>
        <Parent1 />
      </Context> */}

      {/* <MyContext>
        <ParentComp />
      </MyContext> */}

      {/* <UserLists/> */}

      {/* <button onClick={handleToggle}>toggle me</button> */}

      {/* {toggle && <LifeCycleInCBC />} */}

      {/* {toggle && <LifeCycleInFBC />} */}

      {/* <Fetch1 /> */}

      <Fetch2/>

    </div>
  );
}

export default App;
