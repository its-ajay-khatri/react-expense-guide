import react from 'react';
import './Chart.css';
import Chartbar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => (   //datapoints comes from ExpenseChart.js
            <Chartbar 
                key = {dataPoint.label}  //unique identifier is label, so keeping label as key
                value={dataPoint.value}    //datapoint is an array
                maxValue={totalMaximum} 
                label={dataPoint.label} 
            />
        ))}
    </div>
};

export default Chart;