import React, { useState, useRef } from 'react';
import video from './../../assets/video.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './SubSection.css';
import imagesData from './../../data/imagesData';

export const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if (playVideo) {
        vidRef.current.pause();
        } else {
        vidRef.current.play();
        }
    };

    return (
        <div className='intro flex__center section__padding'>
        <div className='flex__center'>
            <h1 className='headtext__cormorant'>Our Gallery</h1>
        </div>
        <div className='app_video section__padding flex__center'>
            <video
            src={video}
            ref={vidRef}
            type='video/mp4'
            loop
            controls={false}
            muted
            />
            <div className='video_overlay flex__center'>
            <div className='video_overlay_circle flex__center' onClick={handleVideo}>
                {playVideo ? (
                <BsPauseFill color='#fff' fontSize={30} />
                ) : (
                <BsFillPlayFill color='#fff' fontSize={30} />
                )}
            </div>
            </div>
        </div>
        <div className='images flex__center'>
            <div className='carousel-container'>
            <Carousel
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                {imagesData.map((image) => (
                <div key={image.id}>
                    <img src={image.src} alt={image.alt} />
                </div>
                ))}
            </Carousel>
            </div>
        </div>
        </div>
    );
    };
