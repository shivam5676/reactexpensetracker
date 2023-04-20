
function Expensetitle(props) {
  
  const amount=props.movie+props.petrol+props.food;
  function clickhandler() {
    console.log("click click click");
  }
  return (
    <div className="expense-item ">
      
        <h2>{props.title}</h2>
        <h2>TOTAL EXPENSE|{amount}</h2> 
        <button onClick={clickhandler}> delete </button>
     
    </div>
  );
}
export default Expensetitle;
