import React from 'react'
import './progress.css'
function Progress () {
  return (
    <div className=' bg-light pr '>
      <div className='pdiv container bg-light'>
        <div className='d-flex Texts'>
          <p className='P-text'>Server Migration</p>
          <p className='P-percent'>20%</p>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-danger'
            role='progressbar'
            style={{ width: '20%', height: 15 }}
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        {/* 2 */}
        <div className='d-flex Texts'>
          <p className='P-text'>Sales Tracking</p>
          <p className='P-percent'>40%</p>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-warning'
            role='progressbar'
            style={{ width: '40%', height: 15 }}
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        {/* 3 */}
        <div className='d-flex Texts'>
          <p className='P-text'>Customer DataBase</p>
          <p className='P-percent'>60%</p>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-primary'
            role='progressbar'
            style={{ width: '60%', height: 15 }}
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        {/* 4 */}
        <div className='d-flex Texts'>
          <p className='P-text'>Payout Details</p>
          <p className='P-percent'>80%</p>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-info '
            role='progressbar'
            style={{ width: '80%', height: 15 }}
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        {/* 5 */}
        <div className='d-flex Texts'>
          <p className='P-text'>Account Setup</p>
          <p className='P-percent'>Complete</p>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-success'
            role='progressbar'
            style={{ width: '100%', height: 15 }}
            aria-valuenow='50'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Progress
