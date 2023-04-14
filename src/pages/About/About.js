import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import CustomerService from "./components/CustomerService/CustomerService";
import OurGoals from "./components/OurGoals/OurGoals";
import OurPrinciples from "./components/OurPrincinciples/OurPrinciples";
import Warranty from "./components/Warranty/warranty";
import AboutBanner from "./components/Banner/AboutBanner";
import CanonicalTag from "../../components/CanonicalTag/CanonicalTag";

const About = () => {
    return (<main className='About'>
        <CanonicalTag pathname='/about'/>
        <AboutBanner/>
        <AboutUs/>
        <Warranty/>
        <OurGoals/>
        <CustomerService/>
        <OurPrinciples/>
    </main>)
}
export default About;