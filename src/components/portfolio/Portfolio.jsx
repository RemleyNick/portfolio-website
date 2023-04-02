import React from "react";
import "./portfolio.css";
import reactPhoto from "../../assests/reactProject.png";
import bjj from "../../assests/imperialBJJ.png";
import budgetApp from "../../assests/budgetApp.png";
import BBHmobile from "../../assests/BBHmobile.png";
import programmer from "../../assests/programmer.jpg";
import lifespan from "../../assests/lifespan.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img
                            src={reactPhoto}
                            alt="Better Back Health Site"
                        ></img>
                    </div>
                    <h3 className="project-title">Better Back Health</h3>
                    <p className="project-paragraph">
                        Designed with a focus on usability and accessibility,
                        this responsive website was built to help individuals
                        experiencing lower back pain to better manage their
                        symptoms and improve their overall quality of life.
                        Leveraged the latest web development technologies,
                        including React, Javascript, and CSS.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/react-portfolio"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://betterbackhealth.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={bjj} alt="Imperial BJJ site"></img>
                    </div>
                    <h3 className="project-title">Imperial BJJ Website</h3>
                    <p className="project-paragraph">
                        I developed a website for a local Jiu Jitsu gym using
                        HTML and CSS. The website features information about the
                        gym's programs, schedule, and instructors, as well as a
                        contact form. I focused on creating a clean and modern
                        design that is easy to navigate, with responsive layouts
                        for optimal viewing on desktop and mobile devices. The
                        project was client-driven to meet their preferences and
                        needs.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/imperialBJJ"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://imperialbjj.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img
                            src={BBHmobile}
                            alt="Better Back Health Mobile app"
                        ></img>
                    </div>
                    <h3 className="project-title">
                        Better Back Health Mobile App
                    </h3>
                    <p className="project-paragraph">
                        Leveraged React Native to convert the Better Back Health
                        website into a user-friendly mobile application,
                        ensuring the same functionality and user experience.
                        This application is aimed at enhancing the quality of
                        life of people dealing with lower back pain.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/react-native-project"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://betterbackhealth.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={budgetApp} alt="Budget App"></img>
                    </div>
                    <h3 className="project-title">Budget Tracker App</h3>
                    <p className="project-paragraph">
                        Providing users with an easy-to-use interface to add and
                        manage their income and expenses, and automatically
                        calculating and displaying their current balance.
                        Developed using a combination of advanced React
                        programming techniques, including hooks such as
                        useState, useContext, and useReducer, as well as various
                        Javascript methods.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/budget-app-react"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://keep-budget-react.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={programmer} alt="Portfolio Website"></img>
                    </div>
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-paragraph">
                        Designed to be fully responsive, my portfolio website
                        provides an interactive platform to showcase my
                        projects, highlight my technical skills, and offer
                        insights into my professional background and personal
                        interests. Developed from the ground up using React and
                        CSS to ensure a smooth, intuitive user experience.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/portfolio-website"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a href="#" className="btn btn-primary">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={lifespan} alt="Lifespan Tracker"></img>
                    </div>
                    <h3 className="project-title">Lifespan Tracker</h3>
                    <p className="project-paragraph">
                        The lifespan tracker application can serve as a tool to
                        promote self-reflection and goal-setting, as well as a
                        visualization of the passage of time. The tracker prompts
                        the user to enter their date of birth, then highlights a
                        grid of boxes representing their weeks lived and the
                        average life expectency - built using HTML, CSS, and
                        JavaScript.
                    </p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/lifespan-app"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://lifespan-tracker.netlify.app/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
