import React from 'react';
import './multimedia.css';

export const Multimedia = () => {
    return (
        <div className='multimedia-container'>
            <iframe
                src="https://www.youtube.com/embed/3cAPn0S61-o?si=j3LfuCAplMtxp7Xk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </div>
    )
}
