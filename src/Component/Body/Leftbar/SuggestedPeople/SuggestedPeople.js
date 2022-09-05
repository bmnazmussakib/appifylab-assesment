import { Avatar, Stack } from '@mui/material';
import React from 'react';
import './SuggestedPeople.css';
import suggestedPeople from '../../../../image/suggested-people.jpg'

const SuggestedPeople = () => {
    return (
        <section className='suggested-people'>
            <h4 className='mb-4'>Suggested People</h4>
            <Stack direction="row" spacing={1} className="d-flex align-items-center justify-content-between">
                <Avatar alt="Remy Sharp" src={suggestedPeople} />
                <h6>Sadek Hossain</h6>
                <button type="button" class="btn btn-outline-secondary">Add+</button>
            </Stack>
        </section>
    );
};

export default SuggestedPeople;