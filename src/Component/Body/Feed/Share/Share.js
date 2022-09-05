import React from 'react';
import './Share.css';
import userPic from '../../../../image/default-user-image.png';
import { Avatar } from '@mui/material';
import { IoMdContrast } from 'react-icons/io';
import { FaCameraRetro } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';

const Share = () => {
    return (
        <div>
            <section className="share">
                <div className="share-wrapper">
                    <div className="share-top d-flex">
                        <Avatar alt="Remy Sharp" src={userPic} className='me-3' />
                        <input type="text" placeholder='Create a new post' className='share-input' />
                    </div>
                    <hr className='create-post-hr'/>
                    <div className="share-bottom">
                        <div className="share-options d-flex justify-content-between">
                            <div className="share-option">
                                <IoMdContrast className='share-icon' />
                                <span>Background</span>
                            </div>
                            <div className="share-option">
                                <FaCameraRetro className='share-icon' />
                                <span>Photo/Video</span>
                            </div>
                            <div className="share-option">
                                <BsEmojiSmile className='share-icon' />
                                <span>Feeling/Activity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Share;