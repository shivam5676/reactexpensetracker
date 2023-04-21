import { useState } from "react";
import "./Expenseitem.css";
import Expenseitem from "./Expenseitem";
import Expensetitle from "./Expensetitle";
function Expenseform() {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredexpense, setEnteredexpense] = useState("");
  const titlechangehandler = (event) => {
    setEnteredtitle(event.target.value);
  };
  const amountchangehandler = (event) => {
    setEnteredexpense(event.target.value);
  };
  const showdataonscreen=(event) =>{
event.preventDefault();
const expensedata={
  title: enteredtitle,
  amount: enteredexpense,

}
    console.log(expensedata)
  }
  
  return (
    <form onSubmit={showdataonscreen}>
      <div className="expense-item h2 ">
        <div className="expense-item h2 ">
          <label>enter title</label>
          <input type="text" onChange={titlechangehandler}></input>
          <label>enter amount</label>
          <input type="tel" onChange={amountchangehandler}></input>
          <input type="submit"></input>
        </div>
      </div>
    </form>
  );
}
export default Expenseform;
