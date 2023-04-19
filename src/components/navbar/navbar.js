import './navbar.css';
import logo from './logo.png';


function NavBar() {
  return (
    <div className="NavBar">
        <ul>
            <li><a href="localhost:3000">Home</a></li>
            <li><a href="localhost:3000">About</a></li>
            <li><a href="localhost:3000">Contact</a></li>
            <li><img src={logo} alt="Arterra Interactive" /></li>
        </ul>
    </div>
  );
}

export default NavBar;
