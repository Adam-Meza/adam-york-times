import React from 'react'
import './SmallPreview.css'

export const SmallPreview = ({story, key}) => {
  const {title, publishedAt, description} = story

  return (
    <div className ="small-preview-wrapper" key={key}>
      <h2 className='small-preview-headline'><bold>{title}</bold></h2>
      <div className='small-preview-info container'>
        <date>{publishedAt}</date>
        <p className='small-preview-description'>{description}</p>
      </div>
    </div>
  )
}
