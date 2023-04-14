import React from "react";
import shapes from './assets/abstract-shapes.png'
import {ParallaxBanner} from "react-scroll-parallax";
import "./assets/RepairServices.css";
import RepairCard from "./RepairCard";
import {brands, services} from "../../../../assets/Info";

const RepairServices = () => {

    return <ParallaxBanner layers={[{image: shapes, speed: -15}]} className="ServiceName">
        <div className="RepairCard">
            <h1>What do we service</h1>
            <ul>
                {services.map((service, index) => <RepairCard key={service.heading} {...service}/>)}
            </ul>
        </div>
        <div className="RepairCard">
            <h1>Brands we service</h1>
            <div className={'Brands'}>
                {brands.map(({alt, src}) => <img key={alt} alt={alt} src={src}/>)}
            </div>
        </div>
    </ParallaxBanner>
};

export default RepairServices;