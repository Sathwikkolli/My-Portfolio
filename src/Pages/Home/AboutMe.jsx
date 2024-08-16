import React from 'react';

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--image">
                <img src="./img/profilepic.svg" alt="About Me" className="about-image" />
            </div>
            <div className="about--section--text">
                <p className="section--title">About Me</p>
                <h1 className="skills-section--heading">
                    Passionate Web Developer & Technology Enthusiast
                </h1>
                <p className="hero--section-description">
                    I’m Sathwik Kolli, a dedicated web developer with expertise in creating innovative and user-friendly web applications. With a strong background in AI and machine learning, I specialize in both front-end and back-end development to deliver impactful and intuitive digital solutions.
                </p>
            </div>
        </section>
    );
}
