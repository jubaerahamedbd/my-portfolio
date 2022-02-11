import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    //here we have
    const programmingSkillsDetails = [
        { skill: "HTML", ratingPercentage: 100 },
        { skill: "CSS", ratingPercentage: 98 },
        { skill: "Bootstrap", ratingPercentage: 90 },
        { skill: "Tailwind CSS", ratingPercentage: 70 },
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 70 },
        { skill: "MYSQL", ratingPercentage: 70 },
        { skill: "Python", ratingPercentage: 80 },
        { skill: "C/C++", ratingPercentage: 90 },
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2022", toDate: "2022" },
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Event Schedule Website",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
                "An event management system where you can sell online ticket wth payment system integration",
            subHeading:
                "Technologies Used: Wordpress, Woocommerce",
        },
        {
            title: "Linkedin Activity Clone",
            duration: { fromDate: "2021", toDate: "2021" },
            description:
                "Linkedin Webpage clone with minor functionality and 100% pixel perfect",
            subHeading:
                "Technologies Used: HTML,CSS",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"United International University, Dhaka"}
                subHeading={"BACHELOR OF COMPUTER SCIENCE & ENGINEERING"}
                fromDate={"2017"}
                toDate={"2021"}
            />

            <ResumeHeading
                heading={"Cambrian College, Dhaka"}
                subHeading={"HIGHER SECONDARY SCHOOL CERTIFICATE"}
                fromDate={"2014"}
                toDate={"2015"}
            />
            <ResumeHeading
                heading={"High School "}
                subHeading={"SECONDARY SCHOOL CERTIFICATE"}
                fromDate={"2012"}
                toDate={"2013"}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Fiverr Marketplace"}
                    subHeading={"Web Developer, Freelancer"}
                    fromDate={"2020"}
                    toDate={"PRESENT"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                       - Currently working as freelancer in this marketplace and working with various item like Develope website with HTML,CSS,JavaScript,ReactJs and Wordpress.
                    </span>
                </div>
                <ResumeHeading
                    heading={"Shadhin Lab LCC"}
                    subHeading={"Software Engineer, Trainee"}
                    fromDate={"NOV 2021"}
                    toDate={"DEC 2021"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Great Experiance with them and learn many thing. Mainly worked with front end desigh using html, css and JavaScript. Also work with ReactJs, MongoDB and many other framework and libraries.
                    </span>
                    <br />
                  
                </div>
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Travelling"
                description=""
            />
            <ResumeHeading
                heading="Music"
                description=""
            />
            <ResumeHeading
                heading="Competitive Gaming"
                description=""
            />
            <ResumeHeading
                heading="Sleeping"
                description=""
            />
            <ResumeHeading
                heading="Hangout"
                description=""
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="No"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container " id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
