import React from 'react';
import styles from './Ship.module.scss';

export const Ship = ({ name, image, weight, year }) => (
    <article className={styles.ship}>
        <div className={styles.content}>
            <h2 className={styles.title}>{name}</h2>

            <p>
                <span className={styles.text}>Weight of ship: </span>
                {weight ? `${weight} Kg` : 'NA'}
            </p>
            <p>
                <span className={styles.text}>Year Built:</span> {year ?? 'NA'}
            </p>
        </div>
        <div className={styles.media}>
            <img className={styles.image} src={image} weight="190" height="125" alt="" />
        </div>
    </article>
);
