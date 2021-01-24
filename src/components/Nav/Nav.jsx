import React from 'react';
import { ReactComponent as Logo } from './rocket.svg';
import styles from './Nav.module.scss';

export const Nav = ({ children }) => {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Logo className={styles.icon} />
                    </div>
                    <h1 className={styles.title}>SpaceX fleet</h1>
                </div>
            </div>
        </nav>
    );
};
