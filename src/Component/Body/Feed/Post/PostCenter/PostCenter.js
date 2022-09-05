import React from 'react';
import './PostCenter.css';
import postImg from '../../../../../image/story.jpg';

const PostCenter = ({desc, image}) => {
    return (
        <div>
            <p className="post-text py-3">{desc}</p>
            <img className='postImage' src={image} alt=""/>
        </div>
    );
};

export default PostCenter;