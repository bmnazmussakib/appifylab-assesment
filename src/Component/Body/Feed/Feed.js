import React from 'react';
import './Feed.css';
import Post from './Post/Post';
import Share from './Share/Share';
import StoryContainer from './StoryContainer/StoryContainer';
import {users, posts} from '../../../data/data';

const Feed = () => {


    return (
        <section className='feed'>
            <StoryContainer />
            <Share />
            {
                posts.map(posts => <Post posts={posts}/>)
            }
            
        </section>
    );
};

export default Feed;