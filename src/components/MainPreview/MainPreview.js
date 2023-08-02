import React from 'react'
import './MainPreview.css'

export const MainPreview = ({story, key}) => {
  const {title, publishedAt, description, urlToImage} = story
  return (
    <div className ="main-preview-wrapper" key={key}>
      <img className='main-preview-image' src={urlToImage}/>
      <div className='main-preview-info-container'>
        <h2 className='main-preview-headline'>{title}</h2>
        <p className='main-preview-description'>{description}</p>
        <date>{publishedAt}</date>
      </div>
    </div>
  )
}
