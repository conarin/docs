import React from 'react';
import styles from './styles.module.css';

export default function Mention({children}) {
    return (
        <span className={styles.mention}>
            {children}
        </span>
    );
}