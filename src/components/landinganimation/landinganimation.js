import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import "./landinganimation.css"; // import the CSS file
import bg from "./bg.mp4"


function LandingAnimation() {
  const words = ["3D Planning", "Post Production", "3D Visualisation", "Interactive Media", "Constuction", "CGI", "Animation"]; // list of words
  const delay = 100; // time delay in milliseconds

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="image-container">
      <video className={`bgvideo ${isScrolled ? 'scrolled' : ''}`} autoPlay loop muted>
          <source src={bg} type='video/mp4' />
      </video>
        <div className="typewriter">
          <ul>
            <li className="list-item">
              <h1 className='typewriter-h1'>
                <Typewriter
                  options={{
                    strings: words,
                    autoStart: true,
                    loop: true,
                    delay: delay,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                />
              </h1>
            </li>
        </ul>
      </div>
  </div>
  );
}


export default LandingAnimation;
