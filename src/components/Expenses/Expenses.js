import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props){
  const [filteredyear, setfilteredYear]= useState('2020');
  const filterChangeHandler= (selectedYear)=>{
    setfilteredYear(selectedYear);
  };

    return(
        <Card className="expenses">
        <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpenseItem 
        title={props.items[0].title} 
        Amount={props.items[0].Amount} 
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[1].title} 
        Amount={props.items[1].Amount} 
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[2].title} 
        Amount={props.items[2].Amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[3].title} 
        Amount={props.items[3].Amount} 
        date={props.items[3].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[4].title} 
        Amount={props.items[4].Amount} 
        date={props.items[4].date}
      ></ExpenseItem>
        </Card>
    )
}
export default Expenses;