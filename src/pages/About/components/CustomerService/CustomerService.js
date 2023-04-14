import React from "react";
import CustomerServiceImg from "../../assets/customerservice.svg";
import "./CustomerService.css";
import ParallaxBannerI from "../../assets/banner2.jpg";
import {ParallaxBanner, ParallaxBannerLayer} from 'react-scroll-parallax';
import {telephone} from "../../../../assets/Info"

const CustomerService = () => {

    return <div className='CustomerService'>
        <ParallaxBanner style={{minHeight: "40vh"}} alt='Service Banner'>
            <ParallaxBannerLayer image={ParallaxBannerI} speed={-6} className={"ServiceBanner"}/>
            <div className='Text'>
                <h1>CUSTOMER SERVICE</h1>
                <h3>WE ARE HERE TO HELP</h3>
                <a href={`tel: ${telephone}`}>
                    <img src={CustomerServiceImg} alt='Customer Service'/>
                </a>
            </div>
        </ParallaxBanner>
    </div>


};

export default CustomerService;
