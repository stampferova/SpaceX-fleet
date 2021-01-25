import React from 'react';
import { RocketList } from '../../components/RocketList/RocketList';
import { Hero } from '../../components/Hero/Hero';
import rocketImage from './rockets.jpg';

export const Rockets = () => (
    <div>
        <Hero title="Rockets" image={rocketImage} />
        <RocketList />
    </div>
);
