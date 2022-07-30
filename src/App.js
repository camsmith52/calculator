import React, { useState } from "react";
import Buttons from "./Buttons";
import EqualsButton from "./EqualsButton";
import Operations from "./Operations";
import "./App.css";

export const MyContext = React.createContext({});

function App() {
  //State
  const [number, setNumber] = useState([]);
  const [decimal, setDecimal] = useState(false);

  //Helper function
  const deleteLast = () => {
    const poppedElement = number.pop();
    if (poppedElement === ".") {
      setDecimal(false);
    }
    if (poppedElement === "+" || "-" || "x" || "/") {
      setDecimal(true);
    }
    setNumber([...number]);
  };

  return (
    <MyContext.Provider value={{ number, setNumber, decimal, setDecimal }}>
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">{number.join("")} </div>
        </div>
        <Buttons id="1" />
        <Buttons id="2" />
        <Buttons id="3" />
        <Operations id="+" />
        <Buttons id="4" />
        <Buttons id="5" />
        <Buttons id="6" />
        <Operations id="-" />
        <Buttons id="7" />
        <Buttons id="8" />
        <Buttons id="9" />
        <Operations id="x" />
        <Buttons id="0" />

        <Operations id="/" />
        <Buttons id="." />
        <EqualsButton className="span-two" />
        <button
          className="span-two"
          onClick={() => {
            setNumber([]);
            setDecimal(false);
          }}
        >
          AC
        </button>
        <button className="span-two" onClick={deleteLast}>
          Delete
        </button>
      </div>
    </MyContext.Provider>
  );
}

export default App;
