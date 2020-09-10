import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';

const FeaturesHeader = () => {
    const { viewport } = useContext(ResizeContext);
    let featuresHeader = 'hero.jpg';

    return (
        <div className="hero">
            <div className="hero__textbox">
                <h1 className="hero__textbox--heading">
                    Features
                </h1>
                <p className="hero__textbox--subheading">
                    We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.
                </p>
            </div>
            <div className="hero__image__container">
                <img 
                    className="hero__image__container--image"
                    src={
                        viewport > 900
                            ? require(`../../images/features/desktop/` + featuresHeader)
                                : viewport > 570
                                    ? require(`../../images/features/tablet/` + featuresHeader)
                                    : require(`../../images/features/mobile/` + featuresHeader)
                    }
                    alt="Professional camera in hand for photography"
                />
            </div>
        </div>
    )
}

export default FeaturesHeader;