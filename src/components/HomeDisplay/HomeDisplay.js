import React from 'react'
import { LargePreview } from '../LargePreview/LargePreview'
import { SmallPreview } from '../SmallPreview/SmallPreview'
import './HomeDisplay.css'

export const HomeDisplay = ({news}) => {
  console.log('in home', news)
    const mainStory = <SmallPreview story={news[0]}/>
    const largePreviews = news.slice(1,4)
                              .map((story, index) => <LargePreview story={story} key={index}/>)
    const smallPreviews = news.slice(5, 10)
                              .map(story => <SmallPreview story={story}/>)
    return (
      <main className='home-display'>
        <div className='large-preview-container'>
          {mainStory}
          {largePreviews}
        </div>
        <aside className='small-preview-container'>
          {smallPreviews}
        </aside>
      </main>
  )
}
