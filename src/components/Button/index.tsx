import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface ButtonProps {
    children: React.ReactElement;
    disabled?: boolean;
    style?: 'primary' | 'secondary' | 'success' | 'danger' | 'blue';
    to?: string;
}

export default function Button(props: ButtonProps) {
    const {
        children,
        to,
        disabled = false,
        style = 'primary'
    } = props;
    
    if (disabled) {
        return (
            <span className={clsx(styles.button, styles[style], styles.disabled)}>
                {children}
            </span>
        );
    } else {
        return (
            <Link to={to} className={clsx(styles.button, styles[style])}>
                {children}
            </Link>
        );
    }
}