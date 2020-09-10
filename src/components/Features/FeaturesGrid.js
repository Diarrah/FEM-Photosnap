import React from 'react';
import { FeatureCard } from '../';
import * as icon from '../../images/features';

const FeaturesGrid = () => (
    <div className="features__grid">
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
        <FeatureCard 
            icon={icon.domain}
            heading="Custom Domain"
            subheading="With Photosnap subscriptions you can host your stories on your own domain. You can 
            also remove our branding!"
        />
        <FeatureCard
            icon={icon.exposure}
            heading="Boost Your Exposure"
            subheading="Users that viewed your story or gallery can easily get notifed of new and featured 
            stories with our built in mailing list."
        />
        <FeatureCard
            icon={icon.dragDrop}
            heading="Drag & Drop Image"
            subheading="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
    </div>
)

export default FeaturesGrid;