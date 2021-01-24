import React from 'react';
import styles from './Ship.module.scss';

export const Ship = ({ name, image, weight, year }) => (
    <div className={styles.ship}>
        <div className={styles.content}>
            <h2 className={styles.title}>{name}</h2>

            <div>
                <span className={styles.text}>Weight of ship:</span>{' '}
                {weight ? `${weight} Kg` : 'NA'}
            </div>
            <div>
                <span className={styles.text}>Year Built:</span> {year ?? 'NA'}
            </div>
        </div>
        <div className={styles.media}>
            <img className={styles.image} src={image} weight="190" height="125" />
        </div>
    </div>
);
