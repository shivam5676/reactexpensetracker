import Expense from "./components/Expenses/Expense";
import Expensedetails from "./components/Expenses/Expenesedetails";

function App() {
  const expenses = [
    {
      title: "expense1st",
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 100" ,
      movie: "movie at rs 2000",
      location: "Location of expenditure",
      amount:2100,
    },
    {
      title: "expense2nd",
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
      amount:3000,
    },
    {
      title: "expense3rd",
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
      amount:3000,
    },
    {
      title: "expense4th",
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
      amount:3000,
    },
  ];

  return (
    <div>
      <h2> Let 's get started!</h2>
      {/* if we want to run javascript method in jsx /react we have to add that method or function inside a curly braces ,now see this map function we have added an curly braces before method function so that it can works without any error ,expenseitem means current item of array(Expenses array) and index means current item index each time both will be updated automatically*/}
      {/* here we are taking expense and other variable these are keys means we ahve to use the same variable to access them from outside of this */}
      {expenses.map((expenseitem,i) =>
        (
          <Expensedetails title={expenses[i].title} amount={expenses[i].amount}></Expensedetails>,
          <Expense
            expense={expenses[i].expense}
            food={expenses[i].food}
            petrol={expenses[i].petrol}
            movie={expenses[i].movies}
            location={expenses[i].location}
          ></Expense>
        
        )
      )}
    </div>
  );
}

export default App;
