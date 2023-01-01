import React from "react";
import "./portfolio.css";
import Programmer from "../../assests/programmer.jpg";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Programmer} alt="Project 1 Image"></img>
                    </div>
                    <h3>Project title</h3>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Programmer} alt="Project 1 Image"></img>
                    </div>
                    <h3>Project title</h3>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Programmer} alt="Project 1 Image"></img>
                    </div>
                    <h3>Project title</h3>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={Programmer} alt="Project 1 Image"></img>
                    </div>
                    <h3>Project title</h3>
                    <div className="portfolio_item-cta">
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/RemleyNick/bootstrap-project"
                            className="btn btn-primary"
                            target="_blank"
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
