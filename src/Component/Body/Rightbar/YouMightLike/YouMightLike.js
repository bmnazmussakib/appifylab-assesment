import React from 'react';
import './YouMightLike.css';
import avatar from '../../../../image/avatar.png';
import { Stack } from '@mui/system';
import { Avatar } from '@mui/material';

const YouMightLike = () => {
    return (
        <section className='you-might-like'>
            <h4 className='mb-5'>You Might Like</h4>
            <Stack direction="row" spacing={2} className="mb-4">
                <div className="d-flex">
                    <Avatar alt="Remy Sharp" src={avatar} />
                    <div className="avatar-name-username ms-3">
                        <h6 className='m-0'>sadfa</h6>
                        <p className='m-0'>sadfa</p>
                    </div>
                </div>
            </Stack>
            <div className="button-container d-flex justify-content-center">
                    <button type="button" class="btn ignore-btn me-3">Ignore</button>
                    <button type="button" class="btn follow-btn">Follow</button>
                </div>
        </section>
    );
};

export default YouMightLike;