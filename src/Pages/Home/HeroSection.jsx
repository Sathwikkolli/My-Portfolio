import React from 'react';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="video--container">
                <video className="background--video" src={`${process.env.PUBLIC_URL}/img/video5.mp4`} autoPlay loop muted />
            </div>
            <div className="overlay"></div>
            {/* Content */}
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Hey, I'm Sathwik Kolli</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
