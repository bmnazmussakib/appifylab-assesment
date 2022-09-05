import React from 'react';
import './YourFriends.css';
import { BsSearch } from 'react-icons/bs';
import { Avatar, Stack } from '@mui/material';
import avatar from '../../../../image/avatar.png';
import friend from '../../../../image/suggested-people.jpg';

const YourFriends = () => {
    return (
        <section className='your-friends'>
            <h4 className='mb-4'>Your Friends</h4>
            <form className="d-flex m-auto mb-5" role="search">
                <input className="form-control me-2" type="search" aria-label="Search" />
                <a href="#"><BsSearch /></a>
            </form>
            <div className='friends'>
                <div className="d-flex align-items-center mb-3">
                    <Avatar className='me-3' alt="Remy Sharp" src={avatar} />
                    <span>admin .</span>
                </div>
                <div className="d-flex align-items-center">
                    <Avatar className='me-3' alt="Remy Sharp" src={friend} />
                    <span>Kazi Mosharraf Shishir</span>
                </div>
            </div>
        </section>
    );
};

export default YourFriends;