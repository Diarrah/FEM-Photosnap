import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';
import { Button } from '../';
import arrow from '../../images/shared/desktop/arrow-white.svg';

const StoryThumbnailLink = ({ image, date, title, author, href }) => {
    const { viewport } = useContext(ResizeContext);
    
    return (
        <div className="story__thumbnail">
            <img 
                className="story__thumbnail__backdrop" 
                src={
                    viewport > 550
                        ? require(`../../images/stories/desktop/` + image)
                        : require(`../../images/stories/mobile/` + image)
                } 
                alt={`Thumbnail link to ${title} story`}
            />
            <div className="story__thumbnail__textbox">
                <small className="story__thumbnail__textbox--date">{date}</small>
                <h3 className="story__thumbnail__textbox--title">{title}</h3>
                <small className="story__thumbnail__textbox--author">by {author}</small>
                <hr className="story__thumbnail__textbox--line" />
                <Button text="Read Story" arrow={arrow} href={href}/>
            </div>
        </div>
    )
}

export default StoryThumbnailLink