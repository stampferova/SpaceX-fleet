import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.copyright}>&copy; 2021 Osikovská Anna</p>
            </div>
        </footer>
    );
};
