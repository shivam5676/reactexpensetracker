import Expenseitem from "./components/Expenseitem";
import Expensetitle from "./components/Expensetitle";

function App() {
  const expenses = [
    {
      title: "expense1st",
      petrol: 1100,
      food: 2200,
      movie:  2000,
      location: "delhi",
      
    },
    {
      title: "expense2nd",
      petrol: 3100,
      food: 2500,
      movie:  2000,
      location: "pune",
      
    },
    {
      title: "expense3rd",
      petrol: 100,
      food: 2400,
      movie:  2000,
      location: "mumbai",
      
    },
  ];

  return (
    <div>
      <h2> Let 's get started!</h2>
      {/* if we want to run javascript method in jsx /react we have to add that method or function inside a curly braces ,now see this map function we have added an curly braces before method function so that it can works without any error ,expenseitem means current item of array(Expenses array) and index means current item index each time both will be updated automatically*/}
      {/* here we are taking expense and other variable these are keys means we have to use the same variable to access them from outside of this */}
      {expenses.map((expenseitem,i) =>
        (
          <div>
<Expensetitle title={expenses[i].title} food={expenses[i].food} petrol={expenses[i].petrol} movie={expenses[i].movie} location={expenses[i].location} ></Expensetitle>
<Expenseitem food={expenses[i].food} petrol={expenses[i].petrol} movie={expenses[i].movie} location={expenses[i].location}></Expenseitem>
        
          </div>
          
        )
      )}
    </div>
  );
}

export default App;
