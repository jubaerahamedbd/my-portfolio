import React, { useState, useRef } from 'react';
import Typical from 'react-typical'
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css'




const ContactMe = (props) => {
    const form = useRef()
    let fadeInScreenHandler = (screen) => {
        if (screen.faceScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePhone = e => {
        setPhone(e.target.value);

    }
    const handleMessage = e => {
        setMessage(e.target.value);
    }

    const sendEmail = e => {
        e.preventDefault();
        // let data = {
        //     name,
        //     email,
        //     phone,
        //     message,
        // };
        setBool(true)
        setBanner("");
        emailjs.sendForm('service_s4cdqvz', 'template_o4d7wvl', e.target, 'user_XTKCAJroxhgUGWB4mDuIo')
            .then((result) => {
                console.log(result.text);
                setBool(false);
                setBanner("Successfully Sent");
                e.target.reset();
                setName("")
                setEmail("")
                setPhone("")
                setMessage("")
            }, (error) => {
                console.log(error.text);
                setBanner("Please Check Input Field");
            });

    };
    return (
        <div className='outter-container'>
            <div className='main-container' id={props.id || ''}>
                <ScreenHeading
                    title={"Contact Me"}
                    subHeading={"Lets Keep In Touch"}
                />
                <div className='central-form'>
                    <div className='col'>
                        <h2>
                            {""}
                            <Typical
                                loop={Infinity}
                                steps={
                                    [
                                        "Get In Touch 📧", 1000,
                                        "Send Your Message",1000
                                    ]
                                }
                            />
                        </h2>
                        <a href='https://www.facebook.com/jubaerahamedbd/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/jubaerahamedbd'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/jubaerahamedbd'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                    <div className='back-form'>
                        <div className='img-back'>
                            <h4>Send Your Email Here!</h4>
                            <img src={imgBack} alt='not found' />
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <p>{banner}</p>
                            <label htmlFor='name'>Name</label>
                            <input type='text' onChange={handleName} name="name" value={name} required />

                            <label htmlFor='email'>Email</label>
                            <input type='email' onChange={handleEmail} name="email" value={email} required />

                            <label htmlFor='phone'>Phone No</label>
                            <input type='number' onChange={handlePhone} name="phone" value={phone} />

                            <label htmlFor='message'>Message</label>
                            <textarea type='text' onChange={handleMessage} name="message" value={message} required />
                            <div className='send-btn'>
                                <button type='submit' value={"send"}>
                                    Send <i className='fa fa-paper-plane'></i>
                                    {bool ? (
                                        <b className="load">
                                            <img src={load1} alt="image not responding" />
                                        </b>
                                    ) : (
                                        ""
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className='footer'>
                <p>©️jubaerahamed.me 2022</p>
            </div>
        </div>
    );
};

export default ContactMe;