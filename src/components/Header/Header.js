import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import titleImage from '../../assets/title.png'

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to ='/' className='nav'>
        <img className='title-image' src={titleImage}/>
      </NavLink>
      <div className="sort-button-container">
      <NavLink to ='/search' className='nav'><button className='sort-button'>SEARCH</button></NavLink>
      <NavLink to ='/games' className='nav'><button className='sort-button'>GAMES</button></NavLink>

        
        {/* <button className='sort-button'>ABC</button>
        <button className='sort-button'>CNN</button> */}
      </div>
    </header>
  )
}
