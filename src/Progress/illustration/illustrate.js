import React from 'react'
import './illustrate.css'
function Illustrate () {
  return (
    <div className='mg'>
      <div className='illu container bg-light'>
        <div className='image'>
          <img
            src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg'
            alt='image'
            width="320rem"
          />
        </div>
        <div className='Text'>
          <p>
            Add some quality, svg illustrations to your project courtesy of
            <span>
              {' '}
              <a href='3'>unDraw</a>{' '}
            </span>{' '}
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Illustrate
