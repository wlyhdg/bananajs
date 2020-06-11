import React from 'react'
import './Navbar.scss'

export default function Navbar(props) {
  let additionalClasses = [];
  if (props.fixed) {
    additionalClasses.push('fixed')
  }
  if(props.dark) {
    additionalClasses.push('nav__dark')
  }
  const navBarClassName = `navbar ${additionalClasses.join(' ')}`

  return (
    <nav className={navBarClassName}>
      <div className='navbar__header'>
        <img className="navbar__logo" alt="" src={props.logo} height="32px" width="32px"/>
        <h1>{props.title}<small> {props.subtitle}</small></h1>
      </div>
    </nav>
  )
}