import React,{useRef, useState} from 'react';
import './video.css'
import VideosKuzey from '../../assets/videos/stock-footage-kickboxing-woman-fighter-trains-his-punches-beats-a-punching-bag-training-day-in-the-boxing-gym.webm'

const VideoPlayer = () => {
    const[playing, setPlaying] = useState(false)
    const videoRef = useRef()


    const videoHandler = (control) =>{
        if (control === "play") {
            videoRef.current.play()
            setPlaying(true)
        }
        else if (control ==="pause") {
            videoRef.current.pause()
            setPlaying(false)
        }   
    }
    
    return ( 
        <React.Fragment>
            <div className="container">
                <video 
                    ref={videoRef}
                    width={"650px"} 
                    src={VideosKuzey}>
                </video>
                {playing ?(
                    <button className='videos-player-btn' onClick={()=>videoHandler("pause")}>Pause</button>
                ) : (
                    <button className='videos-player-btn' onClick={()=>videoHandler("play")}>Play</button>
                )}
            </div>
        </React.Fragment>
     );
}
 
export default VideoPlayer;