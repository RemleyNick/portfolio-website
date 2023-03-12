import React from "react";
import "./about.css";
import Programmer from "../../assests/programmer-two.jpg";

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Programmer} alt="Programmer" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <h5>Javascript</h5>
                        </article>
                        <article className="about_card">
                            <h5>React</h5>
                        </article>
                        <article className="about_card">
                            <h5>Bootstrap</h5>
                        </article>
                        <article className="about_card">
                            <h5 className="low_card">HTML/CSS</h5>
                        </article>{" "}
                        <article className="about_card">
                            <h5>React Native</h5>
                        </article>{" "}
                        <article className="about_card">
                            <h5 className="low_card">Node.js</h5>
                        </article>
                    </div>

                    <p>
                        Hi, Nick here! Since the moment I produced "Hello World" in the console of my first application, I have been captivated by the world of software development. This industry presents a constant and engaging challenge, one that has enabled me to consistently improve and enhance my skills in the creation of high-quality software. What began as a simple "Hello World" project quickly evolved into a deep-seated passion that has only continued to flourish. My mission is to leverage technology to enable individuals to live simpler, more productive, and less stressful lives.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
