import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <h1>Adam York Times</h1>
      <div className="sort-button-container">
        <button className='sort-button'>BBC</button>
        <button className='sort-button'>ABC</button>
        <button className='sort-button'>CNN</button>
      </div>
    </header>
  )
}
