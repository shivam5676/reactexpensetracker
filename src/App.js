import Expense from "./components/Expense";

function App() {
  const expenses = [
    {
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
    },
    {
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
    },
    {
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
    },
    {
      expense: "expense item",
      food: "food",
      petrol: "petrol rs 1000",
      movie: "movie at rs 2000",
      location: "Location of expenditure",
    },
  ];

  return (
    <div>
      <h2> Let 's get started!</h2>
      {/* if we want to run javascript method in jsx /react we have to add that method or function inside a curly braces see this map function we have added an curly braces before method function so that it can works without any error ,expenseitem means current item of array(Expenses array) and index means current item index each time both will be updated automatically*/}
      {expenses.map((expenseitem, i) => (
        <Expense
          expense={expenses[i].expense}
          food={expenses[i].food}
          petrol={expenses[i].petrol}
          movie={expenses[i].movies}
          location={expenses[i].location}
        ></Expense>
      ))}
    </div>
  );
}

export default App;
