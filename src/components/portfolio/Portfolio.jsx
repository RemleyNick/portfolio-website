import React from "react";
import "./portfolio.css";
import Programmer from "../../assests/programmer.jpg";
import reactPhoto from "../../assests/reactProject.png";
import bootstrapPhoto from "../../assests/bootstrapProject.png";
import bootcamp from "../../assests/nucampProject.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={reactPhoto} alt="Project 1"></img>
                    </div>
                    <h3>Better Back Health - React</h3>
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
                    <h3>Coding Bootcamp Website - React/Redux</h3>
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
                            href="https://github.com/RemleyNick/bootstrap-project"
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
                    <h3>This Portfolio Website - React</h3>
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
                        <img src={bootstrapPhoto} alt="Project 1"></img>
                    </div>
                    <h3>Better Back Health - Bootstrap</h3>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
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
