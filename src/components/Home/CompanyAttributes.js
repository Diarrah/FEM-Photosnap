import React from 'react';
import { FeatureCard } from '../';
import * as icon from '../../images/features';

const CompanyAttributes = () => (
    <div className="feature__card__container__bar">
        <FeatureCard 
            icon={icon.responsive}
            heading="100% Responsive"
            subheading="No matter which the device you’re on, our site is fully responsive and stories 
            look beautiful on any screen."
        />
        <FeatureCard
            icon={icon.noLimit}
            heading="No Photo Upload Limit"
            subheading="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
            all of your stories in one go."
        />
        <FeatureCard
            icon={icon.embeded}
            heading="Available to Embed"
            subheading="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
            Maps, and more."
        />
    </div>
)

export default CompanyAttributes;