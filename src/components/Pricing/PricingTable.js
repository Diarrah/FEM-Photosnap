import React from 'react'

const PricingTable = () => (
    <div className="pricing__table__container">
        <h2 className="pricing__table__heading">Compare</h2>
        <div className="pricing__table">
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">The Features</p>
                <ul className="pricing__table__row--plans">
                    <li className="pricing__table__row--plans-basic">Basic</li>
                    <li className="pricing__table__row--plans-pro">Pro</li>
                    <li className="pricing__table__row--plans-basic">Business</li>
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Unlimited Story Posting</p>
                <ul className="pricing__table__row--available">
                    <li className="checked" />
                    <li className="checked" />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Unlimited Photo Upload</p>
                <ul className="pricing__table__row--available">
                    <li className="checked" />
                    <li className="checked" />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Embedding Custom Content</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li className="checked" />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Customize Metadata</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li className="checked" />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Advanced Metrics</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Photo Downloads</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Search Engine Indexing</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li />
                    <li className="checked" />
                </ul>
            </div>
            <div className="pricing__table__row">
                <p className="pricing__table__row--feature">Custom Analytics</p>
                <ul className="pricing__table__row--available">
                    <li />
                    <li />
                    <li className="checked" />
                </ul>
            </div>
        </div>
    </div>
)

export default PricingTable