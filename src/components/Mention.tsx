import React from 'react';

export default function Mention({children, href}) {
    return (
        <a
            className='mention'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            {children}
        </a>
    );
}