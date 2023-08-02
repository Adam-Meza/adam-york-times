import React from 'react'

export const LargePreview = ({story, key}) => {
  const {title, publishedAt, description, urlToImage} = story
  return (
    <div className ="large-preview-wrapper" key={key}>
      <h2 className='large-preview-headline'>{title}</h2>
      <div className='large-preview-info container'>
        <date>{publishedAt}</date>
        <img src={urlToImage}/>
        <p className='large-preview-description'>{description}</p>
      </div>
    </div>
  )
}
