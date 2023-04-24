import "./info.css"; // import the CSS file
import Clients from "./Clients.jpg"

function Info() {
    return (
    <div>
        <div className="Hello">
            <h2 className="title">HELLO, WE ARE ARTERRA INTERACTIVE</h2>
            <p className="description">We are a multi-disciplinary visualisation, animation and interactive studio. For the past 20 years we have built strong and trusted relationships with NSW Government agencies, local councils and property developers who have entrusted us to deliver state-of-the-art 3D visualisations, animation and professional video productions for Australia’s largest property developments, transport and infrastructure projects.</p>
        </div>
        <div className="Clients">
            <h2 className="title">OUR CLIENTS</h2>
            <p className="description">Arterra Interactive has had the opportunity to work with some of Australia’s (if not the world’s) most imaginative, progressive and capable architects, planners, property developers, creative agencies and government departments on projects ranging from static imagery through to animation / interactive media and applications.</p>
            <img src={Clients} alt="Our Clients" className="ClientImage" />
        </div>
        <div className="Quotes">
        
        </div>
    </div>
    );
    }


export default Info;
