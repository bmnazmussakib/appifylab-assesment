import React from 'react';
import './PostBottom.css';
import loveReaction from '../../../../../image/love.svg';
import likeReaction from '../../../../../image/like.svg';
import { BiLike } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';

const PostBottom = ({like, comment}) => {
    return (
        <div className='post-bottom pt-3'>
            <div className="post-bottom-top">
                <div className="post-bottom-top-left">
                    <img className="reaction-image" src={likeReaction} alt="" />
                    <img className="reaction-image" src={loveReaction} alt="" />
                    <span className="reaction-count ms-2">{like}</span>
                </div>
                <div className="post-bottom-top-right">
                    <p className='comment-count'>{comment} comment</p>
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