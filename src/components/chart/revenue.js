import React from 'react'
import './title1.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
function ChartTitleRevenue ({ Title }) {
  return (
    <div className='d-flex rounded title '>
      <p className='earning text-primary '>{Title}</p>

      <p className='three '>
        <span>
          <MoreVertOutlinedIcon
            style={{ color: '#d1d3e2' }}
          ></MoreVertOutlinedIcon>
        </span>
      </p>
    </div>
  )
}

export default ChartTitleRevenue
