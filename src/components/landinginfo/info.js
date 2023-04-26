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
        <div className="quotes">
        <div className="table-row">
            <div className="quote">“I can’t thank Tony and the Arterra team enough for their recent work. An ambiguous brief and seemingly impossible deadline were managed calmly and efficiently with final materials delivered on time and on budget. Tony’s patience, dedication and professionalism shone through and the Arterra team went above and beyond to deliver an incredible, high-quality product that assisted with the successful launch of our project. I wouldn’t hesitate in recommending Arterra Interactive for future projects.</div>
            <div className="quotator">— Simon Thomas, Director, Communications and Stakeholder Relations – Create NSW</div>
        </div>
        <div className="table-row">
            <div className="quote">“I found the Arterra Interactive team to be very responsive to our tight deadlines and evolving needs, displaying a professional and friendly attitude. The products were well received by all stakeholders and I would recommend using Arterra Interactive for similar projects without any hesitation.”</div>
            <div className="quotator">— Ben Grogan, Principle Manager, Community Engagement of Transport for NSW</div>
        </div>
        <div className="table-row">
            <div className="quote">“Arterra Interactive produces work of consistent high quality. The team can interpret a client brief to develop visualisation tools that surpass expectations.”</div>
            <div className="quotator">— Tom Kennedy, Development Director, WestConnex</div>
        </div>
        </div>
    </div>
    );
    }


export default Info;
