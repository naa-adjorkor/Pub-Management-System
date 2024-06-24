import React, { useState,useRef } from 'react'
import video from './../../assets/video.mp4';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

export const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = useRef();

    const handleVideo = () =>{
        setPlayVideo ((prevPlayVideo) => !prevPlayVideo);

        if(playVideo){
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }
  return (
    <div className='section__padding flex__center' >
        <video
        src={video}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        />
        <div className="video_overlay flex__center">
            <div 
                className="video_overlay_circle flex__center" 
                onClick={handleVideo}
            >
                {playVideo
                ? <BsPauseFill color='#fff' fontSize={30}/>
                :<BsFillPlayFill color='#fff' fontSize={30}/>}
            </div>
        </div>
    </div>
  )
}
