import React,{useContext} from 'react'
import { MyContext } from './App';


const EqualsButton = () => {
//imported state
const auth = useContext(MyContext)

//Global variable
 let array = [];

//Helper function
 const onClickEquals = (number) => {
    if (                                    //prevents calculation from computing if it ends in an operation
      number[number.length - 1] === "+" ||
      number[number.length - 1] === "-" ||
      number[number.length - 1] === "/" ||
      number[number.length - 1] === "x"
    ) {
      console.log("returned");
      return;
    }

   let temp = "";

   for (let i = 0; i < number.length; i++) {                //this loop pushes the numbers that are in between each opertor together e.g ['2','2','+','5'] ==> ['22','+','5']
     if (i === number.length - 1) {
       temp += number[i];
       array.push(temp);
     } else if (Number(number[i]) || number[i] === "0" || number[i] === ".") {
       temp += number[i];
     } else {
       array.push(temp);
       temp = "";
       array.push(number[i]);
     }
   }

   while (array.length > 1) {                   //while loop cycles through array and calculates values. It's slices out 2 values and an operator and replaces it will the calculated value.
     if (array.indexOf("/") !== -1) {
       const indexOfDivide = array.indexOf("/");
       const valueBeforeSign = array[indexOfDivide - 1];
       const valueAfterSign = array[indexOfDivide + 1];
       const calculatedValue = (valueBeforeSign / valueAfterSign).toString();
       array.splice(indexOfDivide - 1, 3, calculatedValue);
     } else if (array.indexOf("x") !== -1) {
       const indexOfX = array.indexOf("x");
       const valueBeforeSign = array[indexOfX - 1];
       const valueAfterSign = array[indexOfX + 1];
       const calculatedValue = (valueBeforeSign * valueAfterSign).toString();
       array.splice(indexOfX - 1, 3, calculatedValue);
     } else if (array.indexOf("-") !== -1) {
       const indexOfMinus = array.indexOf("-");
       const valueBeforeSign = array[indexOfMinus - 1];
       const valueAfterSign = array[indexOfMinus + 1];
       const calculatedValue = (valueBeforeSign - valueAfterSign).toString();
       array.splice(indexOfMinus - 1, 3, calculatedValue);
     } else if (array.indexOf("+") !== -1) {
       const indexOfPlus = array.indexOf("+");
       const valueBeforeSign = array[indexOfPlus - 1];
       const valueAfterSign = array[indexOfPlus + 1];
       const calculatedValue = (
         Number(valueBeforeSign) + Number(valueAfterSign)
       ).toString();

       array.splice(indexOfPlus - 1, 3, calculatedValue);
     }
     auth.setNumber(array);
     if (array[0].includes(".")) {
       auth.setDecimal(true);
     } else {
       auth.setDecimal(false);
     }
   }
 };

  return <button onClick={() => onClickEquals(auth.number)}>=</button>;
}

export default EqualsButton