//import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';
import ExpenseItem from './Components/Expenseitem';
import Expenses from './Components/Expenses';

const DUMMP_EXPNESES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMP_EXPNESES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

    return (
    
       <div>
        <h2>Let's get Started</h2>
        <NewExpense onAddExpense = {addExpenseHandler}/>   
            
        <Expenses items = {expenses}/>
       </div> 
  );
  //on Addexpense used in NewExpense.js
   //--------------------------------------------------OR------------------------------------------------

  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"Lets Get Started"),
  //   React.createElement(ExpenseItem,{}, ),
  //   React.createElement(Expenses,{items:expenses})
  // );
}

export default App;
