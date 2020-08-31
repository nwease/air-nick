import React from 'react';
import '../css/Home.css';
import Banner from './Banner';
import Card from './Card';

const Home = () => {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card />
                <Card />
                <Card />
            </div>

            <div className='home__section'>
                <Card />
                <Card />
                <Card />
            </div>

            <div className='home__section'>

            </div>
        </div>
    );
};

export default Home;

