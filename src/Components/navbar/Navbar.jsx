import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import darrow from '../../assets/down-arrow.png';
import hamburger from '../../assets/icons/hamburger.png';
import rightarrow from '../../assets/icons/rightarrow.png';

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pathname = location.pathname.split('/')[1];
    setActiveItem(pathname || 'Home');
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    closeMenu(); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav id='navbar'>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className={`menu-item ${activeItem === 'Home' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleItemClick('Home')}>Home</Link>
        </div>
        <div className={`menu-item courses ${activeItem === 'courses' ? 'active' : ''}`}>
          <Link to="/courses" onClick={() => handleItemClick('Courses')}>
            Courses <img src={darrow} alt="" />
            <div className="dropdown">
              <div className="dropdown-content">
                <Link to="#">Course 1 <img style={{paddingLeft:"1vw"}} src={rightarrow} /> </Link>
                <Link to="#">Course 2 <img style={{paddingLeft:"1vw"}} src={rightarrow} /> </Link>
                <Link to="#">Course 3 <img style={{paddingLeft:"1vw"}} src={rightarrow} /> </Link>
              </div>
            </div>
          </Link>
        </div>
        <div className={`menu-item ${activeItem === 'videos' ? 'active' : ''}`}>
          <Link to="/videos" onClick={() => handleItemClick('videos')}>Videos</Link>
        </div>
        <div className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}>
          <Link to="/contact" onClick={() => handleItemClick('contact')}>Contact Us</Link>
        </div>
        <div className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}>
          <Link to="/about" onClick={() => handleItemClick('about')}>About Us</Link>
        </div>
        <div className={`menu-item ${activeItem === 'testseries' ? 'active' : ''}`}>
          <Link to="/testseries" onClick={() => handleItemClick('testseries')}>Test Series</Link>
        </div>
        <div className={`menu-item ${activeItem === 'studymaterial' ? 'active' : ''}`}>
          <Link to="/studymaterial" onClick={() => handleItemClick('studymaterial')}>Study Material</Link>
        </div>
        <div className={`menu-item ${activeItem === 'student-login' ? 'active' : ''}`}>
          <Link to="/student-login" onClick={() => handleItemClick('student-login')}>Student Login</Link>
        </div>
        <div className={`menu-item ${activeItem === 'blog' ? 'active' : ''}`}>
          <Link to="/blog" onClick={() => handleItemClick('blog')}>Blog</Link>
        </div>
          <div className="new-batch">NEW BATCH</div>
      </div>
    </nav>
  );
};

export default Navbar;
