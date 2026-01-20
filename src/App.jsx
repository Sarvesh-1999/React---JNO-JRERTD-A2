import StatesInFunctionBased from "./Topics/02_States/StatesInFunctionBased";
import StatesInClassBased from "./Topics/02_States/StatesInClassBased";
import DropDown from "./Topics/02_States/Dropdown";
import PropsParent from "./Topics/03_props/PropsParent";
import DrillingParent from "./Topics/04_PropsDrilling/DrillingParent";
import Parent1 from "./Topics/05_context/Parent1";
import Context from "./Topics/05_context/Context";

function App() {
  return (
    <div>
      {/* <StatesInFunctionBased /> */}
      {/* <StatesInClassBased /> */}
      {/* <DropDown/> */}
      {/* <PropsParent/> */}
      {/* <DrillingParent /> */}
      <Context>
        <Parent1 />
      </Context>
    </div>
  );
}

export default App;
