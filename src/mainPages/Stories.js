import React, { useState } from 'react';
import { StoriesHero, StoryThumbnail } from '../components';
import data from '../stories.json';

const Stories = () => {
    const [stories] = useState(data);

    let hero = stories.slice(0, 1),
        gridThumbnails = stories.slice(1, stories.length);

    return (
        <>
        <StoriesHero hero={hero} />
        <div className="stories__grid">
            {gridThumbnails.map(({illustration, title, author, date}, i) => (
                <StoryThumbnail 
                    key={`thumbnail-${i}`}
                    image={illustration}
                    title={title}
                    author={author}
                    date={date}
                />
            ))}
        </div>
        </>
    )
}

export default Stories