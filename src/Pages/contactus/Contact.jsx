import React, {useRef} from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import bg5 from '../../assets/bg5.png'
import './Contact.scss';
import Footer from '../../components/footer/Footer'
import locationIcon from '../../assets/icons/location.png'
import callIcon from '../../assets/icons/call.png'
import mailIcon from '../../assets/icons/mail.png'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_k99s57e', 'template_licqapsREMOVE_THIS', form.current, '7EjtnFEz-7ax6QsuK')
          .then((result) => {
              console.log(result)
          }, (error) => {
            console.log(error)
        });
        form.current.reset();
    }
    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <HeroSection
                imgSrc={bg5}
                hd1={"CONTACT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            />

            <div className="contact-page-section">
                <div className="contact-cards">
                    <div className="card">
                        <img src={locationIcon} alt="" />
                        <div>
                            <h2>OUR OFFICE LOCATION</h2>
                            <p>#405, Lan Streen, Los Vegas, USA</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={callIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT NUMBER</h2>
                            <p>+91 9999888777</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={mailIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT EMAIL</h2>
                            <p>support@chemtime.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className='under-bar'>Interested in discussing?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum enim dolorem. Praesentium quaerat nesciunt voluptatem sit odio dolorum, aliquid expedita veniam sapiente earum natus</p>

                    <form className="form-fields" ref={form} onClick={handleSubmit} >
                        <input name='name' placeholder='Enter Name' required/>
                        <input type="email" name="email" id="email" placeholder='Enter Email' required/>
                        <input type="number" name="contactnumber" id="contactnumber" placeholder='Enter Contact Number' required/>
                        <textarea name="message" rows="10" placeholder='Enter Message' required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <WhatsappIcon/>
            <Footer />

        </div>
    )
}

export default Contact