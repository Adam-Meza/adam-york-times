import React from 'react'
import './LargePreview.css'

export const LargePreview = ({story, key}) => {
  const {title, publishedAt, description, urlToImage} = story
  return (
    <div className ="large-preview-wrapper" key={key}>
      <div className='large-preview-info-container'>
        <h2 className='large-preview-headline'><bold>{title}</bold></h2>
        <p className='large-preview-description'>{description}</p>
        <date className='large-preview-date'>{publishedAt}</date>
      </div>
      <img className='large-preview-image' src={urlToImage}/>
    </div>
  )
}
