import React, { useState } from 'react';
import { PriceCard } from '../';

const PricingToggle = () => {
    const [monthly, setMonthly] = useState(true);    

    return (
        <div className="price__section">
            <div className="price__section__toggle">
                <span>Monthly</span>
                <button 
                    className={`price__section__toggle--button ${!monthly ? "active" : ''}`} 
                    aria-label="Button to toggle subscription price from monthly to annual"
                    onClick={() => setMonthly(!monthly)}
                >
                    <span className="slider" />
                </button>
                <span>Annually</span>
            </div>
            <div className="price__section__cards__container">
                <PriceCard
                    plan="Basic"
                    description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
                    price={monthly ? "$19.00" : "$190.00"}
                    billingCycle={monthly}
                />
                <PriceCard
                    plan="Pro"
                    description="More advanced features available. Recommended for photography veterans and professionals."
                    price={monthly ? "$39.00" : "$390.00"}
                    billingCycle={monthly}
                />
                <PriceCard
                    plan="Business"
                    description="Additional features available such as more detailed metrics. Recommended for business owners."
                    price={monthly ? "$99.00" : "$990.00"}
                    billingCycle={monthly}
                />
            </div>
        </div>
    )
}

export default PricingToggle