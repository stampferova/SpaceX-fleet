import React from 'react';
import { Ship } from '../Ship/Ship';
import styles from './ShipList.module.scss';

export const ShipList = () => {
    const [ships, setShips] = React.useState();

    React.useEffect(() => {
        fetch('https://api.spacexdata.com/v3/ships')
            .then(data => data.json())
            .then(dataInJson => setShips(dataInJson));
    }, []);
    return (
        <div>
            <ul className={styles.list}>
                {ships &&
                    ships.map(({ ship_id, image, weight_kg, year_built, ship_name }) => (
                        <li key={ship_id} className={styles.item}>
                            <Ship
                                name={ship_name}
                                image={image}
                                weight={weight_kg}
                                year={year_built}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
