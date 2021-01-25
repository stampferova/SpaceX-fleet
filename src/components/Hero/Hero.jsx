import React from 'react';
import styles from './Hero.module.scss';

export const Hero = ({ image, title }) => (
    <div className={styles.hero}>
        <img src={image} className={styles.image} />
        <h1 className={styles.title}>{title}</h1>
    </div>
);
