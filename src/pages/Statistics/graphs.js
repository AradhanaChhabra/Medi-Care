import React from 'react'
import { Line } from 'react-chartjs-2';

const graphs = ()=>{


    return(
        <div>
            <Line data={{
                labels:['22/09/2021','23/09/2021','24/09/2021','25/09/2021','26/09/2021'],
                datasets:[
                    {
                    label: 'Upper Limit in Hg',
                    data: [90, 120, 120, 150, 100, 120],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor:'rgba(255, 99, 132, 1)',
                      borderWidth: 1,
                    }
                ]
            }} options={{
                indexAxis: 'x',
                fill:true,
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
                elements: {
                  bar: {
                    borderWidth: 2,
                  },
                },
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Hypertension Stats',
                  },
                },
            }} />
        </div>
    )

}

export default graphs;