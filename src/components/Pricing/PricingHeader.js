import React, { useContext } from 'react';
import { ResizeContext } from '../../useContextResize';

const PricingHeader = () => {
    const { viewport } = useContext(ResizeContext);
    let pricingHeader = 'hero.jpg';

    return (
        <div className="hero">
            <div className="hero__textbox">
                <h1 className="hero__textbox--heading">
                    Pricing
                </h1>
                <p className="hero__textbox--subheading">
                    Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.
                </p>
            </div>
            <div className="hero__image__container">
                <img 
                    className="hero__image__container--image"
                    src={
                        viewport > 900
                            ? require(`../../images/pricing/desktop/` + pricingHeader)
                                : viewport > 570
                                    ? require(`../../images/pricing/tablet/` + pricingHeader)
                                    : require(`../../images/pricing/mobile/` + pricingHeader)
                    }
                    alt="Professional camera in hand for photography"
                />
            </div>
        </div>
    )
}

export default PricingHeader;