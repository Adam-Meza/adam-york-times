import React from 'react'
import { LargePreview } from '../LargePreview/LargePreview'
import { SmallPreview } from '../SmallPreview/SmallPreview'
import { MainPreview } from '../MainPreview/MainPreview'
import './HomeDisplay.css'

export const HomeDisplay = ({news}) => {

    const mainStory = <MainPreview story={news[0]}/>
    const largePreviews = news.slice(5,10)
                              .map((story, index) => <LargePreview story={story} key={index}/>)
    const smallPreviews = news.slice(1, 4)
                              .map((story, index) => <SmallPreview story={story} key={index}/>)
    return (
      <main className='home-display'>
        <div className='hero-preview-container'>
          {mainStory}
          <div className='small-preview-container'>
            {smallPreviews}
          </div>
        </div>
        <aside className='large-preview-container'>
          {largePreviews}
        </aside>
      </main>
  )
}
