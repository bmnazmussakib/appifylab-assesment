import React from 'react';
import './Rightbar.css';
import YouMightLike from './YouMightLike/YouMightLike';
import YourFriends from './YourFriends/YourFriends';

const Rightbar = () => {
    return (
        <section className='rightbar'>
            <YouMightLike />
            <YourFriends />
        </section>
    );
};

export default Rightbar;