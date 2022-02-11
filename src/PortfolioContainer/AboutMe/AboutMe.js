import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

const AboutMe = (props) => {
    return (
        <div className='about-me-container screen-container'>
            <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why Choose me?'}/>
            </div>
        </div>
    );
};

export default AboutMe;