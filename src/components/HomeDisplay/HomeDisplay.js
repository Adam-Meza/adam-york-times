import React from 'react'
import { LargePreview } from '../PreviewComponents/LargePreview/LargePreview';
import { SmallPreview } from '../PreviewComponents/SmallPreview/SmallPreview';
import { MainPreview } from '../PreviewComponents/MainPreview/MainPreview';
import './HomeDisplay.css';

export const HomeDisplay = ({news, displaySingleStory}) => {
  const mainStory = <MainPreview 
                      story={news[0]}
                      displaySingleStory={displaySingleStory}
                      id={0}/>;

  const largePreviews = news.slice(5,10).map(story =>
                          <LargePreview
                            story={story}
                            displaySingleStory={displaySingleStory}
                          />);

  const smallPreviews = news.slice(1, 4).map(story => 
                            <SmallPreview
                              story={story}
                              displaySingleStory={displaySingleStory}
                            />);
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
  );
};
