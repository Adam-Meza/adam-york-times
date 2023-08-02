import React from 'react'

export const SmallPreview = ({story}) => {
  const {title, publishedAt, description} = story

  return (
    <div className ="small-preview-wrapper" key={key}>
      <h2 className='small-preview-headline'>{title}</h2>
      <div className='small-preview-info container'>
        <date>{publishedAt}</date>
        <p className='small-preview-description'>{description}</p>
      </div>
    </div>
  )
}
