import React, { useState } from 'react'
import './Course.scss';
import { Header1, Header2 } from '../../components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import bg3 from '../../assets/bg3.png'
import CourseDetail from '../../components/courseDetail/CourseDetail'
import courseDetailImg from '../../assets/courseDetail.png'
import CourseTable from '../../components/courseTable/CourseTable';
import CourseLinks from '../../components/courseLinks/CourseLinks';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import courseData from './Course.json'
const Course = () => {
    const [activeLink, setActiveLink] = useState('Chemical Science Coaching');

    const handleLinkClick = (link) => {

        setActiveLink(link);
    };
    return (
        <div className="course-page">

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg3}
                hd1={"OFFLINE/ONLINE COURSES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className="course-page-section">
                <CourseLinks 
                activeLink={activeLink} 
                handleLinkClick={handleLinkClick} 
                />
                <div className="course-page-right-nav">
                    <CourseDetail imgSrc={courseDetailImg} heading1={activeLink} detailData={courseData}/>
                    <div className="course-idea">
                        <h2 className='under-bar'>CoursesIdea</h2>
                        <CourseTable mode={"Offline Dashboard"} />
                        <CourseTable mode={"Online Dashboard"} />
                    </div>
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default Course