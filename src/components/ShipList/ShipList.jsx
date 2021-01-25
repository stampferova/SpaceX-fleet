import React from 'react';

import { Ship } from '../Ship/Ship';
import { List } from '../List/List';

export const ShipList = () => {
    const [ships, setShips] = React.useState();

    React.useEffect(() => {
        fetch('https://api.spacexdata.com/v3/ships')
            .then(data => data.json())
            .then(dataInJson => setShips(dataInJson));
    }, []);
    return (
        <div className="mb-md">
            <List>
                {ships &&
                    ships.map(({ image, weight_kg, year_built, ship_name }) => (
                        <Ship
                            key={ship_name}
                            name={ship_name}
                            image={image}
                            weight={weight_kg}
                            year={year_built}
                        />
                    ))}
            </List>
        </div>
    );
};
