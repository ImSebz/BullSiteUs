import React from 'react';
import './multimedia.css';

export const Multimedia = () => {
    return (
        <div className='multimedia-container'>
            <iframe
                src="https://www.youtube.com/embed/UH4DCExjyBs?si=6WCSIRP4aQn-hhGg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}
