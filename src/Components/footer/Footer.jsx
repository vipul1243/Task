import React from 'react'
import logo from '../../assets/logo.png'
import fbicon from '../../assets/icons/facebook.png'
import yticon from '../../assets/icons/youtube.png'
import igicon from '../../assets/icons/igfigmaicon.png'
import checkbox from '../../assets/icons/checkbox.png'
import down from '../../assets/icons/down.png'
import call from '../../assets/call.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
      <div className="detail">
        <img src={logo} alt="" />
        <div className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque maxime, perferendis enim quia, officia quibusdam optio amet cupiditate natus consequuntur dolores fuga ipsum.
        </div>
        <div className="footer-icons">
          <img src={fbicon} width={"25vw"} alt="" />
          <img src={igicon} width={"25vw"} alt="" />
          <img src={yticon} width={"25vw"} alt="" />
        </div>
      </div>
      <div className="courses">
        <h4>Courses</h4>
        <Link to="#">
          <li>HTML & CSS</li>
        </Link>
        <Link to="#">
          <li>Java</li>
        </Link>
        <Link to="#">
          <li>Python</li>
        </Link>
        <Link to="#">
          <li>Power Point</li>
        </Link>
        <Link to="#">
          <li>MS-Office</li>
        </Link>
      </div>
      <div className="links ">
        <h4>Useful Links</h4>

        <div className="link">
          <img src={checkbox} alt="" />
          <Link to="/about">About us</Link>
        </div>
        <div className="link">
          <img src={checkbox} alt="" />
          <Link to="videos">Videos</Link>
        </div>
        <div className="link">
          <img src={checkbox} alt="" />
          <Link to="blog">Blog</Link>
        </div>
        <div className="link">
          <img src={checkbox} alt="" />
          <Link to="/student-login">Students</Link>
        </div>
        <div className="link">
          <img src={checkbox} alt="" />
          <Link to="/courses">Courses</Link>
        </div>
      </div>
      <div className="box">
        <img src={call} alt="" />
        <div>
          <p className='h1'>For More Details</p>
          <p className='h2'>+91 9999888777</p>
        </div>
      </div>
    </div>
    <div className='bottom-footer' >
    <div className='bottom'>
      <li>FAQ |</li>
      <li>Help Desk |</li>
      <li>Login</li>
    </div>
    <div>
      <a href="#navbar"><img src={down} alt="" /></a>
    </div> 
   </div>
    </div>
  )
}

export default Footer