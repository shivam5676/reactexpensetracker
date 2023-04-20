import { useState } from "react";
import "./Expenseitem.css";
import Expensetitle from "./Expensetitle";
function Expenseitem(props){
    const [fcount,updateCount]=useState(props.food);
    const button1click =()=>{
        updateCount(fcount+100)
    
        
    }
    const [mcount,fupdateCount]=useState(props.movie);
    const button2click =()=>{
        fupdateCount(mcount+100)
       
    
        
    }
    const [pcount,pupdateCount]=useState(props.petrol);
    const button3click =()=>{
        pupdateCount(pcount+100)
    
        
    }

     
   
    return(

    
        <div className="expense-item h2">
            <h1>FOOD RS_${fcount}</h1>
            <button onClick={button1click}> btn1</button>
            <h1>MOVIES RS_${mcount}</h1>
            <button onClick={button2click}> btn2</button>
            <h1>PETROL RS_${pcount}</h1>
            <button onClick={button3click}> btn3</button>
            <div className="expense-item__price">{props.location}</div>
        </div>
    )
}
export default Expenseitem;