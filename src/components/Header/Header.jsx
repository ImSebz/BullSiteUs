import React from 'react';
import './header.css';
import bullWelcome from '../../assets/bull_welcome.png';
import bullAsset from '../../assets/bull_asset.png';

export const Header = () => {
    return (
        <>
            <div className='header-container'>
                <img className='bull-welcome-img' src={bullWelcome} alt="Bull Marketing Welcome"/>
                <img className='bull-asset-img' src={bullAsset} alt="" />
            </div>
        </>
    )
}
