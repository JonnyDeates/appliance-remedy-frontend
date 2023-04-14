import React from 'react'
import OwnersMessage from "./components/OwnersMessage/OwnersMessage";
import LandingPageIntroVideo from "./components/LandingPageIntroVideo/LandingPageIntroVideo";
import CompanyPromiseList from "./components/CompanyPromisesList/CompanyPromisesList";
import RepairServices from './components/RepairServices/RepairServices';
import Testimonials from './components/Testimonials/Testimonials';
import AboutUsHomePage from "./components/AboutUsHomePage/AboutUsHomePage";
import "./assets/Home.css"
import CanonicalTag from "../../components/CanonicalTag/CanonicalTag";




const Home = () => {

    return (<main className="Home">
        <CanonicalTag pathname={'/'}/>
        <LandingPageIntroVideo/>
        <AboutUsHomePage/>
        <RepairServices/>
        <CompanyPromiseList/>
        <OwnersMessage/>
        <Testimonials/>
    </main>);
};

export default Home;
