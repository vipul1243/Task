import React from 'react'
import { useState } from "react";
import './Login.scss';
import { Link } from "react-router-dom"
import { Header1, Header2 } from '../../../components/header/Header';
import Navbar from '../../../Components/navbar/Navbar';
import Footer from '../../../Components/footer/Footer';
import WhatsappIcon from '../../../components/whatsappIcon/WhatsappIcon';
import axios from 'axios';




const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/student/login',
                    data: {
                        email: 'vipul1243@gmail.com',
                        dateofbirth: '01/09/2001'
                    },
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
            console.log(response.data);
            if (response.data.success) {
                localStorage.setItem('token', response.data.data);
            }
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error, maybe show an error message to the user
        }
    }

    return (
        <div>
            <Header1 />
            <Header2 />
            <Navbar />

            <div className='student-login-section'>

                <div className='student-login-square'>
                    <div className='student-login-square-header'>
                        <h2>Login</h2>
                    </div>
                    <div className='student-login-card-parent'>
                        {/* <h2>BECOME A MEMBER</h2> */}
                        <div className='student-login-userid-section'>
                            <p>User ID</p>

                            {/* ------------ User Id Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={userId}
                                onChange={(e) => { setUserId(e.target.value) }}
                                placeholder="" />
                        </div>

                        <div className='student-login-userid-section'>
                            <p>Password</p>

                            {/* ------------ Password Input textfield -------------------- */}
                            <input type="text" className="form-control" name="title"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="" />
                        </div>


                        <div className='login-button'>
                            <button className="button" onClick={handleLogin}>Login</button>
                        </div>

                        <div className='already-member'>
                            <p1>Don't have Account? <Link to="/student-signup">Sign Up</Link></p1>
                        </div>

                    </div>
                </div>


            </div>
            <WhatsappIcon />
            <Footer />
        </div>

    )
}

export default Login