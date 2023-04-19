import Typewriter from "typewriter-effect";
import "./typinganimation.css"; // import the CSS file


function TypingAnimation() {
  const words = ["3D Planning", "Urban Design", "Interactive", "Construction", "CGI", "Animation"]; // list of words
  const delay = 100; // time delay in milliseconds

  return (
    <div className="typewriter">
    <h2>Experts in</h2>
    <h1>
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
  </div>
  );
}


export default TypingAnimation;
