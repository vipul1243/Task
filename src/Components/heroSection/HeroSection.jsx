import React from 'react'
import './Hero.scss'

const HeroSection = ({imgSrc,hd1,hd2}) => {
    return (
        <div className="hero-section">
            <img src={imgSrc} className='heroimage' alt="" />

            <div className='detail'>
                <h1>{hd1}</h1>
                <h2>{hd2}</h2>
                <p>We provide always our best service of our clients always </p>
                <p>Try to client's trust satisfaction</p>
            </div>
        </div>
    )
}

export default HeroSection