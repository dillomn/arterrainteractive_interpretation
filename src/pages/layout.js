import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { Outlet } from "react-router-dom";



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