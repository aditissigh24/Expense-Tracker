
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses=[
    {
      id:'e1',
      title:'Toilet Paper',
      Amount:'250',
      date: new Date(2024, 3, 27),
    },
    {
      id:'e2',
      title:'watch',
      Amount:'1500',
      date: new Date(2024, 4, 21),
    },
    {
      id:'e3',
      title:'grocery',
      Amount:'7000',
      date: new Date(2024, 5, 6),
    },
    {
      id:'e4',
      title:'Car Insurance',
      Amount:'2500',
      date: new Date(2024, 3, 27)
    },
    {
      id:'e5',
      title: 'Bill',
      Amount: '5000',
      date: new Date(2024,4,10),
    }
  ]
  const addExpenseHandler = (expense) => {
    console.log("inlog");
    console.log(expense);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
