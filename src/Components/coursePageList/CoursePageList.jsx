import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePageList.scss';

const CoursePageList = ({ hd1, hd2, link1, link2, link3, activeLink, onLinkClick,url1 }) => {
    return (
        <div className="course-list">
            <h2>
                {hd1} <span className='under-bar'>{hd2}</span>
            </h2>
            <div className="course-links">
                <div className={`course-link ${activeLink === link1 ? 'active' : ''}`}>
                    <Link to={url1} onClick={() => onLinkClick(link1)}>
                        {link1}
                    </Link>
                </div>
                <div className={`course-link ${activeLink === link2 ? 'active' : ''}`}>
                    <Link to="#" onClick={() => onLinkClick(link2)}>
                        {link2}
                    </Link>
                </div>
                <div className={`course-link ${activeLink === link3 ? 'active' : ''}`}>
                    <Link to="#" onClick={() => onLinkClick(link3)}>
                        {link3}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoursePageList;
