import React, { useRef } from 'react';
import CoursePageList from '../../components/coursePageList/CoursePageList';
import emailjs from '@emailjs/browser';
import './CourseLinks.scss';

const CourseLinks = ({ activeLink, handleLinkClick }) => {
    const form = useRef();
    const handleMessage = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        if (form !== null) {
            emailjs.sendForm('service_k99s57e', 'template_2a0tus6REMOVE_THIS', form.current, '7EjtnFEz-7ax6QsuK')
                .then((result) => {
                    console.log(result)
                }, (error) => {
                    console.log(error)
                });
            form.current.reset();
        }
    }
    return (
        <div className="course-page-left-nav">
            <CoursePageList
                hd1={"Courses"}
                hd2={"List"}
                link1={"Chemical Science Coaching"}
                link2={"GATE Chemistry Coaching"}
                link3={"UPSC Chemistry Coaching"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/courses'}
            />
            <CoursePageList
                hd1={"Study"}
                hd2={"Material"}
                link1={"Chemical Science Study Material"}
                link2={"GATE Chemistry Study Material"}
                link3={"UPSC Chemistry Study Material"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/studymaterial'}

            />
            <CoursePageList
                hd1={"Test"}
                hd2={"Series"}
                link1={"Chemical Science Test Series"}
                link2={"GATE Chemistry Test Series"}
                link3={"UPSC Chemistry Test Series"}
                activeLink={activeLink}
                onLinkClick={handleLinkClick}
                url1={'/testseries'}

            />

            <div className="opening-hours-list">
                <h2>Opening <span className='under-bar'>Hours</span></h2>
                <div className="timings">
                    <span>Monday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Tuesday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Wednesday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Thursday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Friday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Saturday :</span>
                    <span>6:00 am - 8:00 pm</span>
                </div>
                <div className="timings">
                    <span>Sunday :</span>
                    <span style={{ width: "50%" }}>Closed</span>
                </div>

            </div>

            <div className="contact-form">
                <h2>Quick <span className='under-bar'>Contact</span></h2>
                <form className="form-fields" ref={form} onSubmit={handleMessage}>
                    <input type="email" name="email" id="contact-email" placeholder='Enter Email' required />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Message' required></textarea>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default CourseLinks