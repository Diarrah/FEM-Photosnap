import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';
import { Button } from '../';
import arrow from '../../images/shared/desktop/arrow.svg';

const StoriesPageRedirectCTA = () => {
    const { viewport } = useContext(ResizeContext);
    let beautiful = 'beautiful-stories.jpg',
        everyone = 'designed-for-everyone.jpg';

    return (
        <div className="stories__page__redirects__container">
            <div className="stories__page__redirect">
                <div className="stories__page__redirect__textbox">
                    <h1 className="stories__page__redirect__textbox--heading">
                        Beautiful stories every time
                    </h1>
                    <p className="stories__page__redirect__textbox--subheading">
                        We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                    </p>
                    <Button text="View the Stories" arrow={arrow} href="/stories" underline="black"/>
                </div>
                <div className="stories__page__redirect__image__container">
                    <img 
                        className="stories__page__redirect__image__container--image"
                        src={
                            viewport > 900
                                ? require(`../../images/home/desktop/` + beautiful)
                                : viewport > 570
                                    ? require(`../../images/home/tablet/` + beautiful)
                                    : require(`../../images/home/mobile/` + beautiful)
                        }
                        alt="Laptop showing Photosnap design template"
                    />
                </div>
            </div>
            <div className="stories__page__redirect">
                <div className="stories__page__redirect__textbox">
                    <h1 className="stories__page__redirect__textbox--heading">
                        Designed for everyone
                    </h1>
                    <p className="stories__page__redirect__textbox--subheading">
                        Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. 
                    </p>
                    <Button text="View the Stories" arrow={arrow} href="/stories" underline="black" />
                </div>
                <div className="stories__page__redirect__image__container">
                    <img 
                        className="stories__page__redirect__image__container--image"
                        src={
                            viewport > 900
                                ? require(`../../images/home/desktop/` + everyone)
                                : viewport > 570
                                    ? require(`../../images/home/tablet/` + everyone)
                                    : require(`../../images/home/mobile/` + everyone)
                        }
                        alt="Man with video camera"
                    />
                </div>
            </div>
        </div>
    )
}

export default StoriesPageRedirectCTA;