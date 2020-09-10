import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';
import { Button } from '../';
import arrow from '../../images/shared/desktop/arrow-white.svg';

const Hero = () => {
    const { viewport } = useContext(ResizeContext);
    let create = 'create-and-share.jpg';

    return (
        <div className="hero">
            <div className="hero__textbox">
                <h1 className="hero__textbox--heading">
                    Create and share your photo Stories
                </h1>
                <p className="hero__textbox--subheading">
                    Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                </p>
                <Button text="Get an invite" arrow={arrow} underline="white" />
            </div>
            <div className="hero__image__container">
                <img 
                    className="hero__image__container--image"
                    src={
                        viewport > 900
                            ? require(`../../images/home/desktop/` + create)
                                : viewport > 570
                                    ? require(`../../images/home/tablet/` + create)
                                    : require(`../../images/home/mobile/` + create)
                    }
                    alt="Man admiring nature with a camera"
                />
            </div>
        </div>
    )
}

export default Hero