import React from 'react';
import './Home.css';
import Body from '../Body/Body';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Body />
        </div>
    );
};

export default Home;