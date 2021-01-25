import React from 'react';
import styles from './Rocket.module.scss';
import { StyledLink } from '../StyledLink/StyledLink';

export const Rocket = ({ name, flight, weight, description, link }) => {
    return (
        <article className={styles.item}>
            <h2 className={styles.heading}>{name}</h2>
            <p className={styles.paragraph}>{description}</p>
            <p className={styles.text}>
                <span className={styles.title}>First flight: </span>
                {flight ?? 'NA'}
            </p>
            <p className={styles.text}>
                <span className={styles.title}>Weight of rocket: </span>
                {weight ? `${weight} Kg` : 'NA'}
            </p>
            <p className={styles.perex}>
                More information you can find&nbsp;
                <StyledLink to={{ pathname: link }} external>
                    here
                </StyledLink>
                .
            </p>
        </article>
    );
};
