import React, { useContext } from "react";
import { MyContext } from "./App";

const Buttons = ({ id }) => {
  //imported state
  const auth = useContext(MyContext);

  //Helper function
  const onClickHandler = () => {
    if (id === ".") {
      auth.setDecimal(true);
      if (auth.decimal) {
        return;
      }
    }

    auth.setNumber([...auth.number, id]);
  };

  return <button onClick={onClickHandler}>{id}</button>;
};

export default Buttons;
