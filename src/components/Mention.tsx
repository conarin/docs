import React from 'react';

export default function Mention({children}) {
    return (
        <span
            className='mention'
        >
            {children}
        </span>
    );
}