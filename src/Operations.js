import React, { useContext } from "react";
import { MyContext } from "./App";

const Operations = ({ id }) => {
  //imported state
  const auth = useContext(MyContext);

  //Helper function
  const appendOperation = (operation) => {
    if(auth.number[auth.number.length - 1] === "+" ||
      auth.number[auth.number.length - 1] === "-" ||
      auth.number[auth.number.length - 1] === "/" ||
      auth.number[auth.number.length - 1] === "x"){
        // eslint-disable-next-line
        const poppedValue = auth.number.pop();
        auth.setDecimal(false);
        auth.setNumber([...auth.number, operation]);
      }
    if (
      Number(auth.number[auth.number.length - 1]) || //if the last thing entered is a number or a 0 or not the same operation as before, then append the operation
      auth.number[auth.number.length - 1] === "0" ||
      auth.number[auth.number.length - 1] === "." 
      
    ) {
      auth.setDecimal(false);
      auth.setNumber([...auth.number, operation]);
    }
    return;
  };

  return <button onClick={() => appendOperation(id)}>{id}</button>;
};

export default Operations;
