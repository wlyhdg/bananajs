import React from 'react'
import Banana from '../../static/Banana.png'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <img className="navbar__logo" alt="" src={Banana} height="32px" width="32px"/>
      <h1>Banana<small> JS</small></h1>
    </nav>
  )
}