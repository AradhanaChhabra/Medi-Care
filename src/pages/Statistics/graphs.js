import React from 'react'
import { Line } from 'react-chartjs-2';

const graphs = ({stats})=>{

    const dates = [...stats.map((obj=> obj.date))]
    const uppers = [...stats.map((obj=> obj.upper))]
    const lowers = [...stats.map((obj=> obj.lower))]

    return(
        <div>
            <Line data={{
                labels:dates,
                datasets:[
                    {
                    label: 'Upper Limit in Hg',
                    data: uppers,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor:'rgba(255, 99, 132, 1)',
                      borderWidth: 1,
                    },
                    {
                      label: 'Lower Limit in Hg',
                      data:lowers,
                      backgroundColor: 'rgba(75, 192, 192,0.2)',
                        borderColor:'rgba(75, 192, 192,1)',
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