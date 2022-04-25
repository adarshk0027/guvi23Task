import React from 'react'
import {Doughnut} from 'react-chartjs-2'
function PieChart() {
  return (
    <div className='container line rounded '>
      <div className='row Chart '>
        <Doughnut
          className='col-sm-12'
          data={{
            datasets: [
              {
                data: [
                  60,30,10
                ],
                borderColor: 'blue',
                backgroundColor: ["#1cc88a","#36b9cc","#4e73df"],
                hoverOffset: 4,
                radius:"80%",
                cutout:"70%"
              }
            ],
            labels: [
                "Direct",
                "Social",
                "Referal"
              ],
          }}
          
          width={700}
          height={400}
        ></Doughnut>
      </div>
    </div>
  )
}

  


export default PieChart