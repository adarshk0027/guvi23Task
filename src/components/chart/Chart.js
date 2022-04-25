import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'
import './line.css'
function LineChart () {
  return (
    <div className='container line rounded'>
      <div className='row Chart '>
        <Line
          className='col-sm-12'
          data={{
            labels: [
              'jan',
              'feb',
              'mar',
              'april',
              'june',
              'july',
              'aug',
              'sep',
              'oct'
            ],
            datasets: [
              {
                data: [
                  0,
                  10000,
                  5000,
                  15000,
                  10000,
                  20000,
                  15000,
                  25000,
                  20000
                ],
                borderColor: 'blue',
                backgroundColor: 'white',
                tension: 0.4
              }
            ]
          }}
          options={{
            plugins: {
              legend: {
                display: false
              }
            },
            scales:{
              xAxes:[{
                gridLines:{
                  display:false,
                }
              }],
              yAxes:[{
                gridLines:{
                  color:"white"
                }
              }],
              legend: {
                display: false
              }
            }
          }}
          width={700}
          height={400}
        ></Line>
      </div>
    </div>
  )
}

export default LineChart
