import React from 'react';
import Typical from 'react-typical'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
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
                    </div>
                    <div className='proflie-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, I'M <span className='highlighted-text'>Jubaer Ahamed</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={
                                        [
                                            "FontEnd Developer 🌐", 1500,
                                            "JavaScript Developer 💻", 1500,
                                            "Wordpress Customizer 🔴", 1500,
                                            "Web Designer 🔥", 1500,
                                        ]
                                    }
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front end and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>Hire Me</button>
                        <a href='jubaerahamed.pdf' download={"Jubaer Ahamed.pdf"}>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;