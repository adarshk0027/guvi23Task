import React from 'react'
import './title.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
function ChartTitle ({ Title }) {
  return (
    <div className='d-flex rounded title '>
      <p className='earning text-primary '>{Title}</p>

      <p className='Icon '>
        <span>
          <MoreVertOutlinedIcon
            style={{ color: '#d1d3e2' }}
          ></MoreVertOutlinedIcon>
        </span>
      </p>
    </div>
  )
}

export default ChartTitle
