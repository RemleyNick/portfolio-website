import React from "react";
import "./portfolio.css";
import Programmer from "../../assests/programmer.jpg";
import reactPhoto from "../../assests/reactProject.png";
import bootcamp from "../../assests/nucampProject.png";
import budgetApp from "../../assests/budgetApp.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={reactPhoto} alt="Project 1"></img>
                    </div>
                    <h3 className="project-title">Better Back Health</h3>
                    <p className="project-paragraph">Designed with a focus on usability and accessibility, this responsive website was built to help individuals experiencing lower back pain to better manage their symptoms and improve their overall quality of life. Leveraged the latest web development technologies, including React, Javascript, and CSS.</p>
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
                        <img src={bootcamp} alt="Project 1"></img>
                    </div>
                    <h3 className="project-title">Coding Bootcamp Website</h3>
                    <p className="project-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootcamp-react"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://bootcamp-react-site.netlify.app/"
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
                        <img src={Programmer} alt="Project 1"></img>
                    </div>
                    <h3 className="project-title">This Portfolio Website</h3>
                    <p className="project-paragraph">Designed to be fully responsive, my portfolio website provides an interactive platform to showcase my projects, highlight my technical skills, and offer insights into my professional background and personal interests. Developed from the ground up using React and CSS to ensure a smooth, intuitive user experience.</p>
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
                        <img src={budgetApp} alt="Project 1"></img>
                    </div>
                    <h3 className="project-title">Budget Tracker App</h3>
                    <p className="project-paragraph">Providing users with an easy-to-use interface to add and manage their income and expenses, and automatically calculating and displaying their current balance. Developed using a combination of advanced React programming techniques, including hooks such as useState, useContext, and useReducer, as well as various Javascript methods.</p>
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
            </div>
        </section>
    );
};

export default Portfolio;
