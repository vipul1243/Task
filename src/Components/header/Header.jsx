import React from 'react'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/igfigmaicon.png'
import logo from '../../assets/logo.png'
import phoneIcon from '../../assets/phoneIcon.png'
import clockIcon from '../../assets/clockIcon.png'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header1 = () => {
    return (
        <div className="top-bar">
            <div className='top-links'>
                <span>FAQ |</span>
                <span>Help Desk |</span>
                <span><Link to='/student-login'>Login</Link></span>
            </div>
            <div className="top-icons">
                <a href="https://facebook.com"><img src={fbicon} width={"17vw"} alt="" /></a>
                <a href="https://youtube.com"><img src={yticon} width={"17vw"} alt="" /></a>
                <a href="https://instagram.com"><img src={igicon} width={"17vw"} alt="" /></a>
            </div>
        </div>
    )
}
const Header2 = () => {
    return (
        <div className="top-contact">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="contact">
                <div className="call">
                    <a href="9999888777"><img src={phoneIcon} alt="" /></a>
                    <div>
                        <p className='h1'>CALL US TODAY</p>
                        <p className='h2'>+91 9999888777</p>
                    </div>
                </div>

                <div className="time">
                    <img src={clockIcon} alt="" />
                    <div>
                        <p className='h1'>WE ARE OPEN</p>
                        <p className='h2'>Mon-Fri 8:00-16:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header1, Header2 }