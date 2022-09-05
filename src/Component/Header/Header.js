import React from 'react';
import './Header.css';
import logo from '../../image/Capture.png';
import { BsSearch } from 'react-icons/bs';
import { FiHome, FiBell, FiChevronDown } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Box } from '@mui/system';
import { Tooltip } from 'bootstrap';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const Header = () => {


    return (

        <header className='header'>
            <div className="container">
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="" width='50px' /></div>
                    <div className="nav-search">
                        <form className="d-flex m-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <a href="#"><BsSearch /></a>
                        </form>
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-menu-item"><a href="#"><FiHome /></a></li>
                        <li className="nav-menu-item"><a href="#"><HiOutlineUserGroup /></a></li>
                        <li className="nav-menu-item"><a href="#"><FiBell /></a></li>
                        <li className="nav-menu-item"><a href="#"><AiOutlineMessage /></a></li>
                        <li className="nav-menu-item profile-menu"><a href="#"><FaUserCircle className='me-2' /><span className='me-1'>Adnan Chowdhury</span><FiChevronDown className='profile-arrow' /></a></li>
                    </ul>


                </div>
            </div>
        </header>
    );
};

export default Header;