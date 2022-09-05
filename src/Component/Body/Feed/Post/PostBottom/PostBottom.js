import React from 'react';
import './PostBottom.css';
import love from '../../../../../image/love.svg';
import like from '../../../../../image/like.svg';
import { BiLike } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';

const PostBottom = () => {
    return (
        <div className='post-bottom pt-3'>
            <div className="post-bottom-top">
                <div className="post-bottom-top-left">
                    <img className="reaction-image" src={like} alt="" />
                    <img className="reaction-image" src={love} alt="" />
                    <span className="reaction-count ms-2">6</span>
                </div>
                <div className="post-bottom-top-right">
                    <p className='comment-count'>1 comment</p>
                </div>
            </div>
            <div className="post-bottom-center">
                <div className="post-bottom-center-menu">
                    <div>
                        <BiLike className="post-bottom-center-menu-icon" />
                        <span className="post-bottom-center-menu-text">Like</span>
                    </div>
                    <div>
                        <GoComment className="post-bottom-center-menu-icon" />
                        <span className="post-bottom-center-menu-text">Like</span>
                    </div>
                    <div>
                        <RiShareForwardLine className="post-bottom-center-menu-icon" />
                        <span className="post-bottom-center-menu-text">Like</span>
                    </div>
                </div>
            </div>
            <div className="post-bottom-bottom">
                
            </div>
        </div>
    );
};

export default PostBottom;