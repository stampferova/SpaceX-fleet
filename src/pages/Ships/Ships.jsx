import React from 'react';
import { ShipList } from '../../components/ShipList/ShipList';
import { Hero } from '../../components/Hero/Hero';
import shipsImage from './ships.jpg';

export const Ships = () => (
    <div>
        <Hero title="Ships" image={shipsImage} />
        <ShipList />
    </div>
);
