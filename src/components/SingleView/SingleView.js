import { plugins } from 'chart.js';
import React from 'react'

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
      <img src={urlToImage}/>
      <div className='single-source-box'>
        <p>{author}</p>
        <p>{publishedAt}</p>
        <p>{source}</p>
      </div>
      {content}
    </section>
  )
}
