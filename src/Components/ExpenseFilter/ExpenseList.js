import React from 'react';
import ComplexDate from '../ComplexDate';
import './ExpenseList.css';

const ExpenseList = (props) => {

    if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expense !</h2>
    }

    return <ul className='expense-list'> 
      {  props.items.map((expense) => (
        <ComplexDate 
        id={expense.id}
           title={expense.title} 
           amount={expense.amount} 
           date={expense.date} 
         />
        ))
    }
    </ul>
};

export default ExpenseList;