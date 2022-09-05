import React from 'react';
import './Body.css';
import Leftbar from './Leftbar/Leftbar';
import Feed from './Feed/Feed';
import Rightbar from './Rightbar/Rightbar';

const Body = () => {
    return (
        <div className="container">
            <div className='body'>
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    );
};

export default Body;