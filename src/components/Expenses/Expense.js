function Expense(props) {
  
  
  return (
  
    <div>
      <h3> {props.expense} </h3>
      <h3> {props.food} </h3>
      <h3> {props.petrol}</h3>
      <h3> {props.movie} </h3>
      <h3>{props.location}</h3>
    </div>
  );
}

export default Expense;
