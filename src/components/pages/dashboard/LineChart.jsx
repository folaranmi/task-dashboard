import React from 'react'
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'


function LineChart() {

    // Task Done dataset
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Task done',
                data: [5, 6, 1, 8, 4, 4, 7, 2, 8, 2, 5, 7],
                fill: false,
                lineTension: 0.4,
                radius:  4,

            }
        ]
    };

    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineChart