import React from 'react'
import './CourseDetail.scss'
const CourseDetail = ({ imgSrc, heading1, detailData}) => {
    return (
        <div className='course-detail'>
            <div className="course-img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>
                {detailData[heading1].map((item)=>{
                    return <p>{item}</p>
                })}
            </div>
        </div>
    )
}

export default CourseDetail