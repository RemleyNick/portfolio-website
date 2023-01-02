import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <article className="contact_option">
                    <MdOutlineEmail className="contact_option-icon" />
                    <h4>Email</h4>
                    <h5>remleynick@yahoo.com</h5>
                    <a href="mailto:remleynick@yahoo.com" target="_blank" rel="noreferrer">
                        Send a Message
                    </a>
                </article>
            </div>
        </section>
    );
};

export default Contact;
