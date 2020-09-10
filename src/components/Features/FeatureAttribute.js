import React from 'react';

const FeatureAttributeCard = ({ icon, heading, subheading }) => (
    <div className="feature__card">
        <div className="feature__card__icons">
            <img className="feature__card__icons--icon" src={icon} alt={`${heading} icon`} />
        </div>
        <div className="feature__card__textbox">
            <h4 className="feature__card__textbox--heading">{heading}</h4>
            <p className="feature__card__textbox--subheading">{subheading}</p>
        </div>
    </div>
)

export default FeatureAttributeCard;