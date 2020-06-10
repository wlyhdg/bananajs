import React from 'react'
import Banana from '../../static/Banana.png'
import './Navbar.scss'

export default function Navbar(props) {
  let style;

  if (props.dark) {
    style = { 
      backgroundColor: '#111',
      color: '#BBB'
    }
  }

  return (
    <nav style={style} className='navbar'>
      <div className='navbar__header'>
        <img className="navbar__logo" alt="" src={Banana} height="32px" width="32px"/>
        <h1>Banana<small> JS</small></h1>
      </div>
    </nav>
  )
}