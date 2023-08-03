import React from 'react'
import './SingleView.css'

export const SingleView = ({match, news}) => {
  const id = match.params.id;
  const {content, 
        title, 
        urlToImage, 
        author, 
        source, 
        publishedAt, 
        description, 
        url} = news[id]

  console.log(news[id])

  return (
    <section className='single-view-wrapper'>
      <h2>{title}</h2>
      <p>{description}</p>
      <img className='single-view-image'src={urlToImage}/>
      <div className='single-source-box'>
        <p>{author}</p>
        <p>{publishedAt}</p>
        <p>{source}</p>
      </div>
      {content}
      <p>Learn more at --   
        <a href={url} target="_blank" rel="noopener noreferrer">
          {source}
        </a>
      </p>
    </section>
  )
}
