import LandingAnimation from '../components/landinganimation/landinganimation';
import NavBar from '../components/navbar/navbar'
import Info from '../components/landinginfo/info'
import Footer from '../components/footer/footer'
import { Outlet, Link } from "react-router-dom";



function Home() {
    return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
    );
  }

export default Home;