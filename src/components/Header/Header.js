import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to ='/' className='nav'><h1>Adam York Times</h1></NavLink>
      <div className="sort-button-container">
      <NavLink to ='/search' className='nav'><button className='sort-button'>SEARCH</button></NavLink>
        {/* <button className='sort-button'>ABC</button>
        <button className='sort-button'>CNN</button> */}
      </div>
    </header>
  )
}
