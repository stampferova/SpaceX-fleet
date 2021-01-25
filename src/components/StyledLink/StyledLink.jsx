import React from 'react';
import { Link } from 'react-router-dom';

import styles from './StyledLink.module.scss';

export const StyledLink = ({ external, to, children }) => (
    <Link
        className={styles.link}
        rel={external && 'noopener noreferrer'}
        target={external && '_blank'}
        to={to}
    >
        {children}
    </Link>
);
