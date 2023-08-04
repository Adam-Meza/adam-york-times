import React from 'react'
import './Games.css'

export const Games = () => {
  return (
    <section className='game-view-wrapper'>
      <h2>Games</h2>
      <div className='game-button-wrapper'>

        <div className='game-info-container'>
          <div className='game-square nectr'>Nectr</div>
          <button className='play-button'>
            <a href='https://nectr-game-app.vercel.app/' target="_blank" rel="noopener noreferrer">PLAY</a>
          </button>
        </div>
        <div className='game-info-container'>
          <div className='game-square birdle'>Boredle</div>
          <button className='play-button'>
            <a href='https://boredle-81vv8wiqo-adam-meza.vercel.app/' target="_blank" rel="noopener noreferrer">PLAY</a>
          </button>
        </div>
      </div>
    </section>
  )
}
