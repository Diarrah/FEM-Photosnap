import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => {
    const pageNavigationlinks = ['home', 'stories', 'features', 'pricing'];

    return (
        <ul className="page__links__container">
            {pageNavigationlinks.map((link, i) => (
                <li className="page__link" key={i}>
                    <Link to={i === 0 ? `/` : `/${link}`}>{link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks;