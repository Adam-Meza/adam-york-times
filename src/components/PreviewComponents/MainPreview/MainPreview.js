import React from 'react'
import './MainPreview.css'

export const MainPreview = ({story, displaySingleStory}) => {
  const {title, publishedAt, description, urlToImage, id} = story
  return (
    <div className ="main-preview-wrapper" id={id} key={id} onClick={()=> displaySingleStory(id)}>
      <img className='main-preview-image' src={urlToImage}/>
      <div className='main-preview-info-container'>
        <h2 className='main-preview-headline'>{title}</h2>
        <p className='main-preview-description'>{description}</p>
        <date>{publishedAt}</date>
      </div>
    </div>
  )
}
