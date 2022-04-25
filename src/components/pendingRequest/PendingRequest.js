import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
function Pending ({ Text1, Color, Money }) {
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
        <div className='col-md-8 sec'>
          <p style={{ color:`${Color}` }}>
            {Text1} 
          </p>
          <h5 className='rupee'>{Money}</h5>
        </div>
        <div className='col-md-4'>
          <ForumOutlinedIcon style={{ fontSize: '3rem', color: '#d1d3e2' }}></ForumOutlinedIcon>
        </div>
      </div>
    </div>
  )
}

export default Pending
