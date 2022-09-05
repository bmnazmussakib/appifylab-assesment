import React from 'react';
import './Header.css';
import logo from '../../image/Capture.png';
import { BsSearch } from 'react-icons/bs';
import { FiHome, FiBell } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" className='img-fluid w-50' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex m-auto" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <a href="#"><BsSearch/></a>
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><FiHome/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><HiOutlineUserGroup/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FiBell/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><AiOutlineMessage/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FaUserCircle/></a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;