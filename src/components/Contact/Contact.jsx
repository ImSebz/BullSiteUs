import React from 'react';
import './contact.css';
import contactMobile from '../../assets/contact_mobile.png';

export const Contact = () => {
    return (
        <div className='contact-container'>
            <img className='contact-mobile-img' src={ contactMobile } alt="" />
        </div>
    )
}
