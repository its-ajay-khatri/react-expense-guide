import React from 'react';

import './ExpenseChart.css';
import Chart from './Chart';

const ExpenseChart = (props) => {
    const chartDataPoints = [
        {label: 'Jan', value:0},
        {label: 'Feb', value:0},
        {label: 'mar', value:0},
        {label: 'Apr', value:0},
        {label: 'may', value:0},
        {label: 'Jun', value:0},
        {label: 'Jul', value:0},
        {label: 'Aug', value:0},
        {label: 'Sep', value:0},
        {label: 'oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0},
    ];

    for(const expense of props.expenses){     //expenses comes from Expenses.js, line 26, ExpenseChart tag
        const expenseMonth = expense.date.getMonth(); //starting at 0 => january => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />      //datapoints used in Chart.js
};

export default ExpenseChart;
