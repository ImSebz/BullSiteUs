import React, { useState } from 'react';
import './services.css';
import serviceImg from '../../assets/services.png';
import serviceImgDesktop from '../../assets/services_desktop.png';

export const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='services-container'>
            <img className='service-img' src={serviceImg} alt="Services" />
            <img className='service-img-desktop' src={serviceImgDesktop} alt="Services Desktop" />

            <div className='service-card-container'>
                <div className="service-card" onClick={() => handleCardClick(0)}>
                    <h2 className={activeIndex === 0 ? 'active' : ''}>
                        Event Management <span>Crafting unforgettable Experiences</span>
                    </h2>
                    <div className="service-content">
                        <p className={activeIndex === 0 ? 'show' : 'hide'}>
                            From concept to execution, we handle all aspects of event management with precision and care. Whether it's a corporate gala, a product launch, or a large-scale conference, we ensure every detail is planned to perfection. Our team handles the logistics, so you can focus on connecting with your audience. Relax and enjoy the moment—we've got everything covered to make your event seamless and unforgettable.
                        </p>
                        <span className={`arrow ${activeIndex === 0 ? 'open' : ''}`}>&#9660;</span>
                    </div>
                </div>

                <div className="service-card" onClick={() => handleCardClick(1)}>
                    <h2 className={activeIndex === 1 ? 'active' : ''}>
                        Experiential Marketing <span>Bringing brands to life</span>
                    </h2>
                    <div className="service-content">
                        <p className={activeIndex === 1 ? 'show' : 'hide'}>
                            We create interactive experiences that leave lasting impressions. Experiential marketing is about engaging your audience on a deeper level by making them part of your brand story. Whether it's an immersive pop-up event or a hands-on product demo, we design experiences that inspire, captivate, and build strong connections between your brand and your customers.
                        </p>
                        <span className={`arrow ${activeIndex === 1 ? 'open' : ''}`}>&#9660;</span>
                    </div>
                </div>

                <div className="service-card" onClick={() => handleCardClick(2)}>
                    <h2 className={activeIndex === 2 ? 'active' : ''}>
                        Digital Marketing <span>Your brand, amplified</span>
                    </h2>
                    <div className="service-content">
                        <p className={activeIndex === 2 ? 'show' : 'hide'}>
                            In today's world, a strong digital presence is essential. Our digital marketing services ensure your brand reaches the right audience, at the right time, on the right platform. From social media campaigns to targeted ads and SEO, we help you grow your online presence, increase engagement, and turn clicks into loyal customers. Let us take your brand to the next level in the digital landscape.
                        </p>
                        <span className={`arrow ${activeIndex === 2 ? 'open' : ''}`}>&#9660;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};