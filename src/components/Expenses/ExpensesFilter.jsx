import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter =(props)=>{
    const [isFiltered,setIsFiltered]=useState()
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    };
   
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value= {props.selected} onChange={dropdownChangeHandler}>
                    <option value='2025'>2025</option>
                    <option vlaue='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option vlaue='2022'>2022</option>
                    
                </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;