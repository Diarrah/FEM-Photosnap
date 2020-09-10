import React, { useState } from 'react';
import data from '../../stories.json';
import { StoryThumbnail } from '../';

const StoriesPreviewBar = () => {
    const [storyPreviews] = useState([...data].slice(1, 5));

    return (
        <div className="stories__preview__bar">
            {storyPreviews.map(({illustration, title, author}) => (
                <StoryThumbnail 
                    key={title}
                    image={illustration}
                    title={title}
                    author={author}
                    href="/stories"
                />
            ))}
        </div>
    )
}

export default StoriesPreviewBar;