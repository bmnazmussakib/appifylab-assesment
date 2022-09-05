import React from 'react';
import './DownloadApp.css';
import googleApp from '../../../../image/google-logo-history-png-2804.png'
import appleApp from '../../../../image/pngegg (14).png'

const DownloadApp = () => {
    return (
        <section className='download-app'>
            <h4 className='mb-4'>Downlaod App</h4>
            <div className="app-store-image d-flex justify-content-center">
                <img src={googleApp} alt="" width='100px' className='me-3' />
                <img src={appleApp} alt="" width='100px' />
            </div>
        </section>
    );
};

export default DownloadApp;