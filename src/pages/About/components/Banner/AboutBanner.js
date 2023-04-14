import React from "react";
import AboutBannerPic from "../../assets/banner.jpg";
import "./AboutBanner.css";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const AboutBanner = () => {
    return <>
    <div className={"AboutBanner"}>
        <ParallaxBanner style={{minHeight: "60vh", overflow:'inherit !important' }} alt='About Banner'>
            <ParallaxBannerLayer image={AboutBannerPic} speed={-6} />
        </ParallaxBanner>

    </div>
    </>

};

export default AboutBanner;