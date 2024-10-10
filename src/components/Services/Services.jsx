import React, { useState } from 'react';
import './services.css';
import serviceImg from '../../assets/services.png';

export const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='services-container'>
            <img className='service-img' src={serviceImg} alt="" />

            <div className="service-card" onClick={() => handleCardClick(0)}>
                <h2 className={activeIndex === 0 ? 'active' : ''}>Event Management <span>Crafting unforgettable Experiences</span></h2>
                <p className={activeIndex === 0 ? 'show' : 'hide'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, iure itaque et sequi aliquam, quod eum quia totam nulla, porro ullam excepturi pariatur animi libero eos praesentium earum explicabo sunt.</p>
            </div>
            <div className="service-card" onClick={() => handleCardClick(1)}>
                <h2 className={activeIndex === 1 ? 'active' : ''}>Experiential Marketing <span>Bringing brands to life</span></h2>
                <p className={activeIndex === 1 ? 'show' : 'hide'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quis deleniti quidem minima porro quaerat veritatis quia, dignissimos corporis, aliquid nemo labore molestiae, provident molestias quae nostrum officiis aut ducimus?</p>
            </div>
            <div className="service-card" onClick={() => handleCardClick(2)}>
                <h2 className={activeIndex === 2 ? 'active' : ''}>Digital Marketing <span>Your brand, amplified</span></h2>
                <p className={activeIndex === 2 ? 'show' : 'hide'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto voluptas a sint voluptate eligendi ex nobis ipsam perferendis molestiae cumque expedita quam qui, cum dignissimos dolores doloribus nesciunt maiores!</p>
            </div>
        </div>
    );
};