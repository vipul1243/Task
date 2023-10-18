import React from 'react'
import Videoimg from '../../assets/video.png'
import { VideoCard } from '../cards/Cards';
import './video.scss'

const VideoSection = () => {
    return (
        <div className="videos-section">
            <div className='top-heading'>
                <h1>
                    POPULAR <span className='under-bar'>VIDEOS</span>
                </h1>
                <button>
                    View All
                </button>
            </div>
            <div className="cards">
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
                <VideoCard imgSrc={Videoimg} />
            </div>
        </div>
    )
}

export default VideoSection