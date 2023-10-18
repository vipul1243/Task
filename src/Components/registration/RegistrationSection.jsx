import React, { useState, useRef } from 'react'
import axios from 'axios';
import './Registration.scss'

const RegistrationSection = () => {
    const [inputType, setInputType] = useState('text');

    const email = useRef();
    const course = useRef();
    const number = useRef();
    const dateofbirth = useRef();

    //date of birth input functions
    const handleFocus = () => {
        setInputType('date');
    };

    const handleBlur = () => {
        setInputType('text');
    };

    //Function to handle and send details to backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/student/free-registration',
                    data: {
                        email: email.current.value,
                        coursename: course.current.value,
                        phonenumber: number.current.value,
                        dateofbirth: dateofbirth.current.value,
                    },
                    headers: {

                    }
                });
            console.log(response);
            
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error, maybe show an error message to the user
        }
    }
    return (
        <div className="registration">
            <h1>Get A Free <span>Registration</span>! </h1>
            <form onSubmit={handleSubmit}>
                <input ref={email} type="email" name="email" id="email" placeholder='Enter Email' />
                <select ref={course} name="course" id="course">
                    <option value="Select" disabled selected>Select Course</option>
                    <option value="course1">course1</option>
                    <option value="course2">course2</option>
                </select>
                <input ref={number} type="number" name="phone" id="phone" placeholder='Phone Number' />
                <input ref={dateofbirth} name="dob" id="dob"
                    placeholder='Date Of Birth'
                    type={inputType}
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
                <button type="submit" id='submit'>Submit Now</button>
            </form>
        </div>
    )
}

export default RegistrationSection