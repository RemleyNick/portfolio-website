import React from "react";
import CV from "../../assests/Nicholas-Remley-Resume.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
                See Resume
            </a>
            <a href="#portfolio" className="btn btn-primary">
                My Projects
            </a>
            <a href="#contact" className="btn">
                Contact Me
            </a>
        </div>
    );
};

export default CTA;
