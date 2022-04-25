import React from 'react'
import './color.css'
function ColorDiv({Color,Text,Bg}) {
  return (
    <div>
        <div className={`bg-${Bg}`}>
            <p className={Bg=="light" ? 'Text1 Color' :'text-light Color'}>{Color}</p>
            <p className={Bg=='light' ? 'Text1' : 'Text'}>{Text}</p>
        </div>

    </div>
  )
}

export default ColorDiv