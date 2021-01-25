import React from 'react';

import { List } from '../List/List';
import { Rocket } from '../Rocket/Rocket';

export const RocketList = () => {
    const [rockets, setRockets] = React.useState();

    React.useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets')
            .then(data => data.json())
            .then(dataInJson => setRockets(dataInJson));
    }, []);
    return (
        <div className="mb-md">
            <List>
                {rockets &&
                    rockets.map(
                        ({ rocket_name, description, first_flight, mass: { kg }, wikipedia }) => (
                            <Rocket
                                name={rocket_name}
                                description={description}
                                flight={first_flight}
                                weight={kg}
                                link={wikipedia}
                            />
                        ),
                    )}
            </List>
        </div>
    );
};
