import react from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,       //data coming from ExpenseForm.js
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);       //App.js file in tag NewExpense
    };

    return (
        <div  className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;