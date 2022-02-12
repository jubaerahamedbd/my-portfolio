import React, { useState } from 'react';
import Typical from 'react-typical'
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css'




const ContactMe = (props) => {
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
        console.log(name);
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
    console.log(phone);
    const submitForm =async e => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
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
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name} />

                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmail} value={email} />

                        <label htmlFor='phone'>Phone No</label>
                        <input type='number' onChange={handlePhone} value={phone} />

                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message} />
                        <div className='send-btn'>
                            <button type='submit'>
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
    );
};

export default ContactMe;