import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from './rocket.svg';
import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Logo className={styles.icon} />
                        <h1 className={styles.title}>SpaceX fleet</h1>
                    </div>
                    <div className={styles.links}>
                        <NavLink
                            exact={true}
                            className={styles.link}
                            to="/"
                            activeClassName={styles.is_active}
                        >
                            Ships
                        </NavLink>
                        <NavLink
                            className={styles.link}
                            to="/rockets"
                            activeClassName={styles.is_active}
                        >
                            Rockets
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
