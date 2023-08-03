import React from 'react'
import './SmallPreview.css'

export const SmallPreview = ({story, displaySingleStory}) => {
  const {title, publishedAt, description, id} = story

  return (
    <div className ="small-preview-wrapper" id={id} onClick={()=> displaySingleStory(id)}>
      <h2 className='small-preview-headline'><bold>{title}</bold></h2>
      <div className='small-preview-info container'>
        <date>{publishedAt}</date>
        <p className='small-preview-description'>{description}</p>
      </div>
    </div>
  )
}
