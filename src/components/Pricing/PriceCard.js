import React from 'react'

const PriceCard = ({ plan, description, price, billingCycle }) => (
    <div className="price__card">
        <h2 className="price__card--plan">{plan}</h2>
        <p className="price__card--description">{description}</p>
        <div className="price__card__textbox">
            <h1 className="price__card__textbox--price">{price}</h1>
            <small className="price__card__textbox--cycle">{`per ${billingCycle ? 'month' : 'year'}`}</small>
        </div>            
        <button className="price__card--button">Pick plan</button>
    </div>
)

export default PriceCard