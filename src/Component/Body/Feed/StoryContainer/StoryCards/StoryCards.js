import React from 'react';
import './StoryCards.css';
import defaultUser from '../../../../../image/default-user-image.png'
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import story from '../../../../../image/story.jpg'

const StoryCards = () => {
    return (
        <div>
            <div className="row row-cols-3 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card story-card">
                        <img src={defaultUser} className="card-img-top" alt="..." />
                        <div className="card-body story-card-body">
                            <Fab size="small" color="primary" aria-label="add">
                                <AddIcon className='add-story-icon' />
                            </Fab>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card story-card d-flex flex-column align-items-center justify-content-center">
                        <div className="py-4">
                            <img src={story} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body mb-0">
                            <p>Adnan Chowdhury</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StoryCards;