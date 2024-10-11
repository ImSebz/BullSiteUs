import React from 'react';
import './contact.css';
import contactMobile from '../../assets/contact_mobile.png';
import contactDesktop from '../../assets/contact_desktop.png';
import contactText from '../../assets/contact_text.png';

export const Contact = () => {
    return (
        <div className='contact-container'>
            <img className='contact-mobile-img' src={contactMobile} alt="" />
            <div className='contact-desktop-info'>
                <div className='contact-desktop-img-container'>
                    <img className='contact-desktop-img' src={contactDesktop} alt="" />
                </div>
                <div className='contact-info'>
                    <img className='contact-text-img' src={ contactText } alt="Contact Text" />
                    <p>Juan Felipe Vega</p>
                    <p>jfvega@bullmarketing.com</p>
                    <p>Head of Planning</p>
                </div>
            </div>

        </div>
    )
}
