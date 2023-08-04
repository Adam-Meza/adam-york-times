import React, { useState } from 'react';
import { LargePreview } from '../PreviewComponents/LargePreview/LargePreview';
import './Search.css'

export const Search = ({ news, displaySingleStory }) => {
  const [input, setInput] = useState('');
  const [previews, setPreviews] = useState([]);

  const handleInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInput(inputValue);

    const previewCards = news
      .filter(story => story.title.toLowerCase().includes(inputValue)
        || story.description.toLowerCase().includes(inputValue))
      .map((story) => ( <LargePreview
                          key={story.id}
                          story={story}
                          displaySingleStory={displaySingleStory} /> ));
    
      setPreviews(previewCards);
  };

  return (
    <section className='search-view-wrapper'>
      <input 
        value={input}
        onChange={handleInput}
        className="search-input"
        placeholder='Search by Title'>
      </input>
      <div className='preview-container'>{previews}</div>
    </section>
  );
};
