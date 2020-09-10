import React, { useContext } from 'react';
import { ResizeContext } from '../useContextResize';
import { Button } from './';
import arrow from '../images/shared/desktop/arrow-white.svg';

const CTA = () => {
    const { viewport } = useContext(ResizeContext);
    let backdrop = 'bg-beta.jpg';

    return (
        <div className="cta">
            <img 
                className="cta__backdrop" 
                src={
                    viewport > 840
                    ? require(`../images/shared/desktop/` + backdrop)
                        : viewport > 600 
                            ? require(`../images/shared/tablet/` + backdrop)
                            : require(`../images/shared/mobile/` + backdrop)
                } 
                alt="" 
            />
            <div className="cta__textbox">
                <h1 className="cta__textbox--heading">We're in beta <br />Get your invite today</h1>
                <Button text="Get an invite" arrow={arrow} underline="white" />
            </div>
        </div>
    )
}

export default CTA