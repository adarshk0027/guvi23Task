import React from 'react'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
function EarningsWrapper ({ Text1, Text2, Color, Money }) {
  return (
    <div
      className='Earnings Border rounded bg-light'
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
        <div className='col-md-8 sec'>
          <p style={{ color:`${Color}` }}>
            {Text1} <span>(</span> {Text2} )
          </p>
          <h5 className='rupee'>{Money}</h5>
        </div>
        <div className='col-md-4'>
          {Text2 == 'MONTHLY' ? (
            <CalendarTodayOutlinedIcon
              style={{ fontSize: '3rem', color: '#d1d3e2' }}
            ></CalendarTodayOutlinedIcon>
          ) : (
            <AttachMoneyOutlinedIcon
              style={{ fontSize: '3rem', color: '#d1d3e2' }}
            ></AttachMoneyOutlinedIcon>
          )}
        </div>
      </div>
    </div>
  )
}

export default EarningsWrapper
