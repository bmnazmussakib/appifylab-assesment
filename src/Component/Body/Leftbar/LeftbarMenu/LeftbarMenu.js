import React from 'react';
import './LeftbarMenu.css';
import { FiSave, FiUser, FiUsers, FiClipboard, FiCalendar } from 'react-icons/fi';

const LeftbarMenu = () => {
    return (
        <>
            <div className="leftbar-wrapper">
                <h3 className='mb-4'>Explore</h3>
                <ul className="leftbar-list">
                    <li className="leftbar-list-item">
                        <FiSave className='leftbar-list-icon' />
                        <span className='leftbar-list-item-text'>Saved Post</span>
                    </li>
                    <li className="leftbar-list-item">
                        <FiUser className='leftbar-list-icon' />
                        <span className='leftbar-list-item-text'>People</span>
                    </li>
                    <li className="leftbar-list-item">
                        <FiUsers className='leftbar-list-icon' />
                        <span className='leftbar-list-item-text'>Group</span>
                    </li>
                    <li className="leftbar-list-item">
                        <FiClipboard className='leftbar-list-icon' />
                        <span className='leftbar-list-item-text'>Page</span>
                    </li>
                    <li className="leftbar-list-item">
                        <FiCalendar className='leftbar-list-icon' />
                        <span className='leftbar-list-item-text'>Events</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LeftbarMenu;