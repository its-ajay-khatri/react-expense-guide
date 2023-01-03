import React,{useState} from 'react';
import ComplexDate from './ComplexDate';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from './Expenseitem';
import ExpenseList from './ExpenseFilter/ExpenseList';
import ExpenseChart from './Chart/ExpensesChart';
import './Expenses.css';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear;
       //return true;
    });

    return (
    <div>    
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChnageHandler}/>
            <ExpenseChart expenses = {filteredExpenses}/>
            <ExpenseList items = {filteredExpenses}/>       
            
            {/* <ComplexDate 
                title = {props.items[0].title}
                amount = {props.items[0].amount}
                date = {props.items[0].date}
            />
            <ComplexDate 
                title = {props.items[1].title}
                amount = {props.items[1].amount}
                date = {props.items[1].date}
            />
            <ComplexDate 
                title = {props.items[2].title}
                amount = {props.items[2].amount}
                date = {props.items[2].date}
            />
            <ComplexDate 
                title = {props.items[3].title}
                amount = {props.items[3].amount}
                date = {props.items[3].date}
            /> */}
                
        </div>
    </div>
    );
}

export default Expenses;