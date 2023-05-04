import "./footer.css"; // import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer-container">
      <ul className="nav-link-footer">
            <a href="https://www.linkedin.com/company/arterra-interactive" target="_blank" rel="noopener noreferrer" className="nav-link-footer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://www.youtube.com/channel/UCKqV5EMjgpiHoBc4sLszHgQ" target="_blank" rel="noopener noreferrer" className="nav-link-footer">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>

            <a href="https://www.instagram.com/arterrainteractive" target="_blank" rel="noopener noreferrer" className="nav-link-footer">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>

            <a href="https://www.facebook.com/ArterraInteractive/" target="_blank" rel="noopener noreferrer" className="nav-link-footer">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

      </ul>
      <p className="copywrite">© 2023 Arterra Interactive.</p>
    </div>
  );
}

export default Footer;
