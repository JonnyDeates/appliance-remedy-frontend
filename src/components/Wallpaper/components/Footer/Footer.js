import './Footer.css'
import facebook from './facebook.png'
import yelp from './yelp.png'
import {Link} from "react-router-dom";
import useIsMobile from "../../../../utils/useIsMobile/useIsMobile";
import {BusinessHours, email, services, telephone} from "../../../../assets/Info";
// import google from './google.png'

const Footer = () => {

    const isMobile = useIsMobile();
    let ServicesSection = () => {

        return <div className='services'>
            <Link to='/services'>Services</Link>
            <ul>{services.map(service => <li key={service.heading}>{service.heading} Repair</li>)}</ul>
        </div>
    };

    const gotoYelp = () => window.open('https://www.yelp.com/biz/appliance-remedy-cedar-park');
    const gotoFacebook = () => window.open('https://www.facebook.com/profile.php?id=100090592590736&mibextid=ZbWKwL');


    return <footer className="Footer">
        <div className='logos'>
            <img src={yelp} alt='yelp' onClick={gotoYelp}/>
            <img src={facebook} alt='facebook' onClick={gotoFacebook}/>
            {/*<img src={google} alt='google'/>*/}
        </div>
        {!isMobile && <ServicesSection/>}
        <div className='services'>
            <span>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
                </span>
            {isMobile ? <a href={`tel: ${telephone}`} className={'contact'}>{telephone}</a> :
                <p className='contact'>{telephone}</p>}
            {isMobile ? <a href={`mailto: ${email}`} className={'contact'}>{email}</a> :
                <p className='contact'>{email}</p>}
            <BusinessHours/>
        </div>


    </footer>
}
export default Footer;