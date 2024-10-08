import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () =>{
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__descirption">
        <h2>{title}</h2></div>
        <div className="expense-item__price">{props.Amount}</div>
     <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
