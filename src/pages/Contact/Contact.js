import ContactDetails from "./components/Details/ContactDetails";
import {ParallaxBanner} from "react-scroll-parallax";
import './assets/Contact.css'
import kitchen from './assets/kitchen.jpg'
import React, {Suspense} from "react";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";
import CanonicalTag from "../../components/CanonicalTag/CanonicalTag";

const Contact = () => {

    return <div className={'ContactUs'}>
        <CanonicalTag pathname='/contact'/>
        <ParallaxBanner layers={[{image: kitchen, speed: -10}]}/>
        <h1>Contact Us</h1>
        <div className={"content"}>
            <ContactDetails/>
            {/*<ContactForm/>*/}
        </div>
        <Suspense fallback={<>Loading. . .</>}>
        <GoogleMaps/>
        </Suspense>
    </div>
};
export default Contact;