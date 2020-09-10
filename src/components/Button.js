import React from 'react';

const Button = ({ text, arrow, href, underline }) => (
    <a href={href}
       className={`arrow--btn
                    ${underline === 'white' 
                        ? 'underline white' 
                        : underline === 'black' 
                            ? 'underline black' 
                            : ''
                    }
                `} 
    >
        <span>{text}</span>
        <img src={arrow} alt="" />
    </a>
)

export default Button