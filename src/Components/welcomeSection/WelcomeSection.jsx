import React from 'react'
import './WelcomeSection.scss'
import ss3 from '../../assets/ss3.png'
import ss2 from '../../assets/ss2.png'
import { WelcomeCard } from '../cards/Cards';

const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="message">
                <h1>WELCOME TO OUR</h1>
                <p className='under-bar'>UNIVERSITY</p>
                <h3>We care for children, protect their welfare, and prepare them for the future</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi neque ex numquam, nulla autem quos, magnam qui iure ipsa minima necessitatibus</h4>
                <button>View Details</button>
            </div>
            <div className="cards">
                <WelcomeCard imgSrc={ss2} />
                <WelcomeCard imgSrc={ss3} />
                <WelcomeCard imgSrc={ss3} />
            </div>
        </div>
    )
}

export default WelcomeSection