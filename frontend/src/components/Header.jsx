import React from 'react'
import '../App.css'

const Header = (props) => {
  return (
    <div className='header'>
        <h2 className='top-left'>{props.title}</h2>
        <ul>
          <div className="top-right">
          <li className='list'>How to Use?</li>
          <li className='list'>About us</li>
          </div>
        </ul>
    </div>
  )
}

export default Header
