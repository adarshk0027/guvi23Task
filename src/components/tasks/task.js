import React from 'react'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import './task.css'
function TaskWrapper ({ Text1, Color, Money }) {
  return (
    <div
      className='Earnings Border bg-light'
      style={{
        borderColor: `${Color}`,
        borderTopWidth: '0',
        borderRightWidth: '0',
        borderBottomWidth: '0',
        borderLeftWidth: '.2rem',
        borderStyle: 'solid'
      }}
    >
      <div className=' row'>
        <div className='col-md-8 sec '>
          <p style={{ color: `${Color}` }}>{Text1}</p>
          <div className='d-flex'>
            <h5 className='rupee'>{Money} </h5>

            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: '50%' }}
                aria-valuenow='50'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <AssignmentOutlinedIcon style={{ fontSize: '3rem', color: '#d1d3e2' }}></AssignmentOutlinedIcon>
        </div>
      </div>
    </div>
  )
}

export default TaskWrapper
