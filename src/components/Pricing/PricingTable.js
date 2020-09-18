import React from 'react'

const PricingTable = () => {
    const features = [
        {name: 'Unlimited Story Posting', basic: true, pro: true, business: true },
        {name: 'Unlimited Photo Upload', basic: true, pro: true, business: true },
        {name: 'Embedding Custom Content', basic: false, pro: true, business: true },
        {name: 'Customize Metadata', basic: false, pro: true, business: true },
        {name: 'Advanced Metrics', basic: false, pro: false, business: true },
        {name: 'Photo Downloads', basic: false, pro: false, business: true },
        {name: 'Search Engine Indexing', basic: false, pro: false, business: true },
        {name: 'Custom Analytics', basic: false, pro: false, business: true }
    ];

    return (
        <div className="pricing__table__container">
            <h2 className="pricing__table__heading">Compare</h2>
            <div className="pricing__table">
                <div className="pricing__table__row table__header">
                    <p className="pricing__table__row--feature">The Features</p>
                    <ul className="pricing__table__row--plans">
                        <li className="pricing__table__row--plans-basic">Basic</li>
                        <li className="pricing__table__row--plans-pro">Pro</li>
                        <li className="pricing__table__row--plans-basic">Business</li>
                    </ul>
                </div>
                {features.map(({name, basic, pro, business}) => (
                    <div className="pricing__table__row table__body" key={name}>
                        <p className="pricing__table__row--feature">{name}</p>
                        <ul className="pricing__table__row--available">
                            <li className={basic ? 'checked' : ''} />
                            <li className={pro ? 'checked' : ''}  />
                            <li className={business ? 'checked' : ''} />
                        </ul>
                    </div>
                ))}               
            </div>
        </div>
    )
}

export default PricingTable