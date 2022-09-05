import React from 'react';
import './Post.css';
import PostBottom from './PostBottom/PostBottom';
import PostCenter from './PostCenter/PostCenter';
import PostTop from './PostTop/PostTop';
import {users} from '../../../../data/data';


const Post = ({posts}) => {

    const {comment, date, desc, id, image, like, user_id} = posts;

    const user = users.find(users => users.id === id );
    

    return (
        <section className='post'>
            <div className="post-wrapper">
                <PostTop date={date} first_name={user.first_name} last_name={user.last_name} />
                <PostCenter desc={desc} image={image} />
                <PostBottom like={like} comment={comment} />
            </div>

        </section>
    );
};

export default Post;