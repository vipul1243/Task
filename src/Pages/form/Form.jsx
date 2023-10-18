import React from 'react'
import './Form.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.png';
import teacher from '../../assets/teacher1.png';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import useRazorpay from "react-razorpay";
import axios from 'axios';

function Form() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(1000);
    const [selectedOption, setSelectedOption] = useState("Male")

    const [Razorpay] = useRazorpay();

    //Function to handle razorpay
    const handlePayment = async (params) => {
        const response = await
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/payment/createOrder',
                    data: {
                        amount: amount,
                        currency: 'INR',
                        receipt: "abcd",
                        notes: {
                            description: "best course",
                            language: "DSA",
                            access: "lifetime"
                        }
                    },
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                console.log(response)
        const options = {
            key: "rzp_test_XIQpLJB0JJOCKa",
            // key_secret:"VTKjL1ldgDB6F1ir9kE5AdFw",
            amount: amount*100,
            currency: "INR",
            name: "ChemTime",
            description: "Course",
            order_id: response.data.id,
            handler:async function (response){ 
                console.log(response) 
                const res = await
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/payment/verifyOrder',
                    data: {
                        order_id: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id
                    },
                    headers: {
                        xrazorpaysignature: response.razorpay_signature
                    }
                });
                
                
                alert("This step of Payment Succeeded"); 
                if(res.data.success) {
                    const result = await
                    axios({
                        method: 'post',
                        url: 'http://localhost:5000/api/student/registration-form',
                        data: {
                            ...data,
                            payment: true
                        }
                    });
                }
            },
            prefill: {
                name: "pawan",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
        console.log(pay); 
        razorpayObject.on('payment.failed', function (response){ 
         console.log(response); 
         alert("This step of Payment Failed"); 
   });

        // rzp1.on("payment.failed", function (response) {
        //     alert(response.error.code);
        //     alert(response.error.description);
        //     alert(response.error.source);
        //     alert(response.error.step);
        //     alert(response.error.reason);
        //     alert(response.error.metadata.order_id);
        //     alert(response.error.metadata.payment_id);
        // });

    };

    // Function to handle the change in radio button selection
    function onValueChange(event) {
        // Updating the state with the selected radio button's value
        setSelectedOption(event.target.value)
    }

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/testseries');
    };

    return (

        <div>
            <div className='sf-header-parent'>
                <div className='sf-header'>
                    <img src={logo} />
                </div>
                <div className='sf-contact-details' >
                    <p>Reg, Orice: 28-B/71- Jia Sara (Hauz Khas) Near IT Delhi - 110016</p>
                    <p>Tel.: +91-8595764714</p>
                    <p>E-mail: info@asapchemtime.com</p>
                </div>
            </div>

            <div className='sf-form-parent'>

                <div className='sf-register-profile-img-parent'>
                    <div className='sf-register-field'>
                        <p className='sf-form-text'>Reg. No</p>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <img src={teacher} />

                </div>

            </div>


            {/*---------------------- Course Duration ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>
                    <label>

                        <span>Course Duration: </span>

                    </label>
                    <label>

                        <span>6 Month</span>
                        <input
                            type="radio"
                            value="Male"
                            checked={selectedOption === "Male"}
                            onChange={onValueChange} />
                    </label>


                    <label>
                        <span>1 Year</span>
                        <input
                            type="radio"
                            value="Female"
                            // Checking this radio button if the selected option is "Female"
                            checked={selectedOption === "Female"}
                            onChange={onValueChange} />
                    </label>


                    <label>

                        <span>2 Year</span>
                        <input
                            type="radio"
                            value="Other"
                            // Checking this radio button if the selected option is "Other"
                            checked={selectedOption === "Other"}
                            onChange={onValueChange} />
                    </label>

                </div>

                {/* ------- Session field -------- */}
                <div className='sf-register-field'>
                    <p className='sf-form-text'>Session: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

            </div>




            {/*---------------------- Course Mode ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>

                    <label>

                        <span>Demo</span>
                        <input
                            type="radio"
                            value="Male"
                            // Checking this radio button if the selected option is "Male"
                            checked={selectedOption === "Male"}
                            onChange={onValueChange} />
                    </label>


                    <label>
                        <span>Ragular</span>
                        <input
                            type="radio"
                            value="Female"
                            // Checking this radio button if the selected option is "Female"
                            checked={selectedOption === "Female"}
                            onChange={onValueChange} />
                    </label>


                    <label>
                        <span>Weekend</span>
                        <input
                            type="radio"
                            value="Other"
                            // Checking this radio button if the selected option is "Other"
                            checked={selectedOption === "Other"}
                            onChange={onValueChange} />
                    </label>

                    <label>
                        <span>Correspondance</span>
                        <input
                            type="radio"
                            value="Other"
                            checked={selectedOption === "Other"}
                            onChange={onValueChange} />
                    </label>

                    <label>
                        <span>Test Series</span>
                        <input
                            type="radio"
                            value="Other"
                            // Checking this radio button if the selected option is "Other"
                            checked={selectedOption === "Other"}
                            onChange={onValueChange} />
                    </label>

                </div>



            </div>

            {/*---------------------- Name of examination ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Name of Examination</p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Name of Subject</p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>


            {/*---------------------- Student Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-student-name'>
                    <p>Name: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </div>



            {/*---------------------- Date of birth ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>Date Of Birth (DD/MM/YY): </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Category: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


                <label>
                    <span>Gender: </span>
                </label>
                <label>

                    <span>Male</span>
                    <input
                        type="radio"
                        value="Male"
                        // Checking this radio button if the selected option is "Male"
                        checked={selectedOption === "Male"}
                        onChange={onValueChange} />
                </label>

                <label>
                    <span>Female</span>
                    <input
                        type="radio"
                        value="Male"
                        // Checking this radio button if the selected option is "Male"
                        checked={selectedOption === "Female"}
                        onChange={onValueChange} />
                </label>
            </div>



            {/*---------------------- Father Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Father Name: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </div>



            {/*---------------------- Guardians Occupation ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Guardians Occupation: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Designation: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>


            {/*---------------------- Address Name ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-father-name'>
                    <p>Address: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </div>



            {/*---------------------- State - pin - phoneno ---------------------- */}
            <div className='sf-date-of-birth'>

                <div className='sf-date-of-birth'>
                    <p>State: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


                <div className='sf-date-of-birth'>
                    <p>Pin: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='sf-date-of-birth'>
                    <p>Phone (Res): </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>



            </div>


            {/*---------------------- Mobile No / Email ---------------------- */}
            <div className='sf-name-of-examination'>

                <div className='sf-name-of-examination'>
                    <p>Mobile No: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Email: </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>





            <div className='sf-result-border'></div>

            <div className='sf-result-heading-parent'>
                <div className='sf-result-heading'>
                    <p1>Examination</p1>

                </div>
                <div>
                    <p1>Year of Passing</p1>
                </div>

                <div>
                    <p1>% C.G.P.A</p1>
                </div>

                <div>
                    <p1>Division</p1>
                </div>

                <div>
                    <p1>College</p1>
                </div>
                <div>
                    <p1>University/Institution</p1>
                </div>


            </div>
            <div className='sf-result-border'></div>


            {/* ///---------- result X --------------------- */}

            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>X</p1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>

            {/* ///---------- result XI --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>XI</p1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>Graduation</p1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>

            <div className='sf-result-border-2'></div>


            {/* ///---------- result Post Graduation --------------------- */}
            <div className='sf-result-fields'>
                <div className='sf-marking'>
                    <p1>Post Graduation</p1>
                </div>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>


            <div className='sf-result-border-2'></div>


            {/*---------------------- Course Mode ---------------------- */}

            <div className='sf-course-section'>

                <div className='sf-course-radio-button-form'>
                    <label>

                        <span>Mode Of Payment: </span>

                    </label>
                    <label>

                        <span>Online</span>
                        <input
                            type="radio"
                            value="Male"
                            // Checking this radio button if the selected option is "Male"
                            checked={selectedOption === "Male"}
                            onChange={onValueChange} />
                    </label>


                    <label>
                        <span>Offline</span>
                        <input
                            type="radio"
                            value="Female"
                            // Checking this radio button if the selected option is "Female"
                            checked={selectedOption === "Female"}
                            onChange={onValueChange} />
                    </label>

                </div>



            </div>

            {/*---------------------- How did you know about us ---------------------- */}
            <div className='sf-know-about-us'>

                <div className='sf-know-about-us'>
                    <p>How did you know about us? </p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </div>



            {/*---------------------- Registration Procedure  ---------------------- */}
            <div className='sf-registration-procedure'>
                <p1>Registration Procedure:- </p1>
                <p>Send your duly signed application form with one photograph and original copy of Online/Cash Deposit Slip/Transaction Slip drawn in favour of “ASAP CHEM TIME Pvt. Ltd.” payable at New Delhi, to Head. Office only as mentioned in the top right corner of this form. Students are required to mention their Name, Course and Subject on the back side of Demand Draft.</p>
            </div>

            {/*---------------------- DECLARATION  ---------------------- */}
            <div className='sf-declaration'>
                <p1>DECLARATION</p1>
                <p>I have no objection for my result being published by the ASAP CHEM TIME Pvt. Ltd. if I succeed in the entrance examinations. For disciplinary action, the decision of the managing body of the Institute will be final. Any request for refund/interchange of material will not be entertained. The study material supplied to the student is our copyright and is meant for the use of student himself/herself only.
                    All disputes are subject to Delhi Jurisdiction only.</p><br></br>
                <p>I have read the declaration mention above and information given are true to the best of my knowledge.</p>
            </div>


            {/*---------------------- Date / place ---------------------- */}
            <div className='sf-date-place-parent'>

                <div className='sf-name-of-examination'>
                    <p>Date</p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='sf-name-of-subject'>
                    <p>Place</p>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


            </div>


            <div className='sf-paynow'>
                <button className="button" onClick={navigateToContacts}>Print As PDF</button>
                <button className="button" onClick={handlePayment}>Pay Now</button>

            </div>
            <WhatsappIcon />
        </div>

    )
}

export default Form