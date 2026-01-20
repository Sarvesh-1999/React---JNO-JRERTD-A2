import { createContext, useState } from "react";

//! STEP 1 :  CREATE A CONTEXT AND EXPORT IT
export const myContextStore = createContext(); // RETURNS, CONTEXT OBJECT

const Context = (props) => {
  console.log(props); //  {children : {}}

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let data1 = 10;
  let data2 = "hello World";

  //! STEP 2 : PROVIDE A CONTEXT
  return (
    <myContextStore.Provider value={{ data1, data2 ,isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </myContextStore.Provider>
  );
};

export default Context;
