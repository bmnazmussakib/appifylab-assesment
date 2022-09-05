import React from 'react';
import './Leftbar.css';
import DownloadApp from './DownloadApp/DownloadApp';
import LeftbarMenu from './LeftbarMenu/LeftbarMenu';
import SuggestedPeople from './SuggestedPeople/SuggestedPeople';

const Leftbar = () => {
    return (
        <section className='leftbar'>
            <LeftbarMenu />
            <DownloadApp />
            <SuggestedPeople />
        </section>
    );
};

export default Leftbar;