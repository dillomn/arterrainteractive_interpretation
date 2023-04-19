import Typewriter from "typewriter-effect";
import "./typinganimation.css"; // import the CSS file
import bg from "./bgimg.gif"

function TypingAnimation() {
  const words = ["3D Planning", "Post Production", "3D Visualisation", "Interactive", "Media Release", "CGI", "Animation"]; // list of words
  const delay = 100; // time delay in milliseconds

  return (
    <div className="image-container">
      <img src={bg} alt="bg" className="image"></img>
        <div className="typewriter">
          <ul>
            <li className="list-item">
              <h2>Experts in</h2>
            </li>
            <li className="list-item">
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
            </li>
        </ul>
      </div>
  </div>
  );
}


export default TypingAnimation;
