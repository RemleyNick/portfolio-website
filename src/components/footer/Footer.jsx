import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Projects</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer_socials">
                <a
                    href="https://www.linkedin.com/in/nick-remley/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a href="https://github.com/RemleyNick" target="_blank">
                    <BsGithub />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
