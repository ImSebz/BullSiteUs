import React from 'react';
import './header.css';
import bullWelcome from '../../assets/bull-welcome.png';
import bullAsset from '../../assets/bull-asset.png';

export const Header = () => {
    return (
        <>
            <div className='header-content'>
                <img className='bull-welcome-img' src={bullWelcome} alt="Bull Marketing Welcome"/>
                <img className='bull-asset-img' src={bullAsset} alt="" />
            </div>
        </>
    )
}
