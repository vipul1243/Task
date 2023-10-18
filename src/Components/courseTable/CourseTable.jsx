import React from 'react'
import './CourseTable.scss'
import { useNavigate } from 'react-router-dom'
const CourseTable = ({ mode }) => {
    const navigate = useNavigate();
    const handleEnroll = ()=>{
        navigate('/form');
    }
    return (
        <div className='course-table'>
            <div className="dashboard">
                <h1>{mode}</h1>
                <div className="parent-row">
                    <span>Course</span>
                    <span>Class Time</span>
                    <span>Course Duration</span>
                    <span>Price</span>
                    <span>Registration</span>
                </div>
                <div className="child-row">
                    <span>NET Chemical Science</span>
                    <span>45 minutes</span>
                    <span>3 years</span>
                    <span>₹299</span>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
                <div className="child-row">
                    <span>NET Chemical Science</span>
                    <span>45 minutes</span>
                    <span>2 years</span>
                    <span>₹299</span>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
                <div className="child-row">
                    <span>NET Chemical Science</span>
                    <span>1 Hour</span>
                    <span>4 years</span>
                    <span>₹299</span>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
                <div className="child-row">
                    <span>NET Chemical Science</span>
                    <span>30 minutes</span>
                    <span>5 years</span>
                    <span>₹299</span>
                    <button onClick={handleEnroll}>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default CourseTable