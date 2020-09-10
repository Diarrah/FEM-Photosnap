import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';
import { Button } from '../';
import arrow from '../../images/shared/desktop/arrow-white.svg';

const StoryHero = ({ hero }) => {  
    const { viewport } = useContext(ResizeContext);

    return (
        <>
            {hero.map(({illustration, title, date, author, subheading }) => (
                <div className="stories__hero" key={title}>
                    <img 
                        className="stories__hero--backdrop" 
                        src={
                            viewport > 925
                                ? require(`../../images/stories/desktop/` + illustration)
                                : viewport > 620
                                    ? require(`../../images/stories/tablet/` + illustration)
                                    : require(`../../images/stories/mobile/` + illustration)
                        }
                        alt={`${title} article`} 
                    />
                    <div className="stories__hero__textbox">
                        <small className="stories__hero__textbox--featured">Last Month's Featured Story</small>
                        <h1 className="stories__hero__textbox--heading">{title}</h1>
                        <span className="stories__hero__textbox--date">{date}</span>
                        <span className="stories__hero__textbox--author">by {author}</span>
                        <p className="stories__hero__textbox--synopsis">{subheading}</p>
                        <Button text="Read Story" arrow={arrow} underline="white" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default StoryHero;