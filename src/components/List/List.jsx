import React from 'react';
import styles from './List.module.scss';

export const List = ({ children }) => (
    <ul className={styles.list}>
        {Array.isArray(children) &&
            children.map((child, index) => (
                <li key={index} className={styles.item}>
                    {child}
                </li>
            ))}
    </ul>
);
