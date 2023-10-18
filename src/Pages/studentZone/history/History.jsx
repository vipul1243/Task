import React from 'react'
import "./History.scss"
import courseImg from '../../../assets/course-img.png'


const History = () => {
    return (
        <div>
            <div className='ph-appbar'>
                <h2>Purchased History</h2>
            </div>

            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>


            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>

            <div className='ph-course-parent'>
                <img src={courseImg} alt="" />

                <div className='ph-course-detail'>
                    <h3>Chemical Science Coaching</h3>


                    <p>Type: Online Course</p>
                    <p>Amount: 299</p>
                    <p>Amount: 299</p>
                    <p>Payment: Online</p>
                    <p>Date: 03/10/2023</p>



                </div>

            </div>

        </div>


    )
}

export default History